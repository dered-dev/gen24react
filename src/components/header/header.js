// imports
import logo from '../../logo.svg';

// component
const Header = () => {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Hola Koders
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            PRimer componente React
            </a>
        </header>
    )
}

// Export
export default Header