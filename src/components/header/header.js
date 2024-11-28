import logo from '../logo.svg';
import './header.css';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="Header-logo" alt="logo" />
      <p>
        Header
      </p>
    </header>
  );
}

export default Header;