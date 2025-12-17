import Logo from '../assets/logo.png';
import Bag from '../icons/Bag';

function Navbar() {

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="navbar-brand">
            <img src={Logo} className="logo" alt="Organifi logo" />
          </div>
          <div className="bag">
            <Bag />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;