import { Fragment, useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"

function App() {
  const [search, setSearch] = useState({
    ciudad: '',
    pais: ''
  })

  const [consultation, setConsultation] = useState(false)

  const { ciudad, pais } = search

  useEffect(() => {
    const consultAPI = async () => {
      if (consultation) {
        const appId = '3dcb68e60691adf731ac60bfd89f3785'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const answer = await fetch(url)
        const result = await answer.json()
        console.log(result)
      }
    }
    consultAPI()
  }, [consultation])


  return (
    <Fragment>
      <Header
        titulo='Clima React App'
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
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
