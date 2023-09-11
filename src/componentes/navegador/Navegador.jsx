import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './navegador.css'
import * as Icon from 'react-icons/fa'

function Navegador() {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const hadleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () => {
  if (window.innerWidth <= 960) {
    setButton(false);
  } else {
    setButton(true);
  }
};

useEffect(() => {
  showButton();
}, []);

window.addEventListener('resize', showButton);
  return (
    <>
    <nav className='navbar'>
    <div className='navbar-container'>
          <Link onClick={closeMobileMenu} className='navbar-logo'> RESTAURANTE
          <Icon.FaOldRepublic/>
          {/* <img src={logo} alt="imagen" className='navbar-logo'/> */}
          </Link>     

    
    <div className='menu-icon' onClick={hadleClick}>
    {click ? <Icon.FaTimes/> : <Icon.FaBars/>} 
    </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'><Link className='nav-links' to="/"  onClick={closeMobileMenu}>Home</Link></li>
          <li className='nav-item'><Link className='nav-links' to="/conocenos" onClick={closeMobileMenu}>Conocenos</Link></li>
          <li className='nav-item'><Link className='nav-links' to="/Menu" onClick={closeMobileMenu}>Menu</Link></li>
          <li className='nav-item'><Link className='nav-links' to="/Reservas" onClick={closeMobileMenu}>Reservaciones</Link></li>
        </ul>
     </div>
    </nav>
       
    </>
  )
}

export default Navegador