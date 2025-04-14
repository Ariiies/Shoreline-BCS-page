import '../styles/Header.css'
import { Link } from 'react-router-dom';
// <img className="logo-img" src="/src/assets/img/test.png" alt="Aplicación demo" /> 
const Header = () => {
  return (
    <header className="header">
      <div className="logo"> 
        <p classNAme="title-logo">Shoreline Baja Sur</p>
      </div>
      <Link to="/contact">
      <button className="nav-button">Contactar</button>
      </Link>
      
    </header>
  )
}

export default Header