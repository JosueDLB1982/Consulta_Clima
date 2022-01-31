import { useState } from "react"

const Form = ({search, setSearch, setConsultation}) => {
    

    const [error, setError] = useState(false)

    const {ciudad, pais} = search

    // Función que coloca los elementos en el state
    const handleChange = e => {
        setSearch({
            ...search, // Copia del array actual
            [e.target.name] : e.target.value //key:value, asigna los que escoja el usuario
        })
    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault()

        // Validación
        if(ciudad.trim() === '' || pais.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        setConsultation(true)


    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darken-4 error">Se requieren todos los campos</p> : null}
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>

            <div className='input-field col s12'>
                <select
                    name='pais'
                    id='pais'
                    value={pais}
                    onChange={handleChange}
                >
                    <option value=''>-- Seleccione un País --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="PE">Perú</option>
                    <option value="CL">Chile</option>
                    <option value="VE">Venezuela</option>
                    <label htmlFor='pais'>País: </label>
                </select>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    )
}

export default Form
