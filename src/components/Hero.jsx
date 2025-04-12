import '../styles/Hero.css'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Construye algo increíble con nosotros</h1>
        <p>El mejor trabajo al mejor precio.</p>
        <div className="hero-buttons">
          <button className="primary-btn">Contactar ahora</button>
          <Link to ="/gallery">
            <button className="secondary-btn">Ver galeria →</button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="/src/assets/img/work.jpeg" 
          alt="Aplicación demo" 
        />
      </div>
    </section>
  )
}

export default Hero