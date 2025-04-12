import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Shoreline Baja Sur</h3>
          <ul>
            <li>
              <img src="/src/assets/img/test.png" width={150} alt="App logo" /> </li>
            
          </ul>
        </div>
        <div className="footer-section">
          <h3>Ubicacion</h3>
          <ul>
            <li>El Pescadero.</li>
            <li>La Paz, BCS, Mexico.</li>
            <li>CP: 23300.</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li>Tel. 1303243</li>
            <li>Wathsapp: 6121696226</li>
            <li>Correo: luisaries1998@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shoreline Baja Sur. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer