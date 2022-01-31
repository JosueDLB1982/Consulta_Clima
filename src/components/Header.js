import React from 'react'

const Header = ({titulo, personalizacion}) => {
    return (
        <nav>
            <div className=' light-blue darken-2'>
                <a href='#' className='brand-logo'>{titulo}</a>
                <a href='https://github.com/JosueDLB1982' target='blank' className='personalizacion'>{personalizacion}</a>
            </div>
        </nav>
    )
}

export default Header
