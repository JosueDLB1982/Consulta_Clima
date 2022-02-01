import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <nav>
            <header className='nav-wrapper light-blue darken-2'>
                <a href='#!' className='brand-logo'>{title}</a>
            </header>
        </nav>
    )
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header
