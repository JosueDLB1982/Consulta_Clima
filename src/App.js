import { Fragment, useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"

function App() {
  const [search, setSearch] = useState({
    ciudad: '',
    pais: ''
  })

  const [consultation, setConsultation] = useState(false)

  const {ciudad, pais} = search
    
  useEffect(() => {
    const consultAPI = async () => {

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
