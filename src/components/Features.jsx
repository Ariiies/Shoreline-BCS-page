import '../styles/Features.css'

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Rendimiento',
      description: 'Trabajo optimizado para máxima velocidad y eficiencia'
    },
    {
      icon: '🎨',
      title: 'Diseño',
      description: 'Diseños modernos, atractivos y eficientes'
    },
    {
      icon: '🔒',
      title: 'Seguridad',
      description: 'Nuestros productos son seguros, confiables y muy duraderos'
    }
  ]

  return (
    <section id="features" className="features">
      <h2>Nuestras características</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features