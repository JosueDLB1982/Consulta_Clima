import { useState } from "react"

const Form = () => {
    const [search, setSearch] = useState({
        ciudad: '',
        pais: ''
    })

    const {ciudad, pais} = search

    // Función que coloca los elementos en el state
    const handleChange = e => {
        setSearch({
            ...search, // Copia del array actual
            [e.target.name] : e.target.value //key:value, asigna los que escoja el usuario
        })
    }

    return (
        <form>
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
        </form>
    )
}

export default Form
