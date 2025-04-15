import '../styles/CTA.css'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>¿Listo para comenzar?</h2>
        <p>Comunicate ya y obten un presupuesto sin costos ni compromisos</p>
        <Link to="/contact">
          <button className="cta-button">Contactar</button>
        </Link>
        
      </div>
    </section>
  )
}

export default CTA