import '../styles/Header.css'
// <img className="logo-img" src="/src/assets/img/test.png" alt="Aplicación demo" /> 
const Header = () => {
  return (
    <header className="header">
      <div className="logo"> 
        <p>Shoreline Baja Sur</p>
      </div>
      <button className="nav-button">Contactar</button>
    </header>
  )
}

export default Header