import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    const onClick = (e) => {
        // TODO
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'ToDo App'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;
