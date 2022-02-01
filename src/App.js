import { Fragment, useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import Clima from "./components/Clima"
import Error from "./components/Error"

function App() {
  const [search, setSearch] = useState({
    ciudad: '',
    pais: ''
  })

  const [consultation, setConsultation] = useState(false)

  const [result, setResult] = useState({})

  const [error, setError] = useState(false)

  const { ciudad, pais } = search

  useEffect(() => {
    const consultAPI = async () => {
      if (consultation) {
        const appId = '3dcb68e60691adf731ac60bfd89f3785'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const answer = await fetch(url)
        const result = await answer.json()
        setResult(result)
        setConsultation(false) //Para que cambie el state a false y poder hacer consultas nuevas

        // Detectar si hay una respuesta positiva de la API

        if (result.cod === '404') {
          setError(true)
        } else {
          setError(false)
        }
      }
    }
    consultAPI()
  }, [consultation])

  let component
  if(error) {
    component = <Error message='No hay resultados. Verifique los Datos Introducidos.' />
  } else {
    component =  <Clima
                    result={result}
                  />
  }

  return (
    <Fragment>
      <Header
        title='Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsultation={setConsultation}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
