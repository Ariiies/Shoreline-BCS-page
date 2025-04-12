import '../styles/Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "El trabajo fue rapido y eficaz, no se puede pedir mas. ¡Increíble!",
      author: "Juanita Perez, El Pescadero, marzo 2025"
    },
    {
      quote: "Quede muy satisfecho con el resultado. mi casa ahora tiene un aspecto moderno y acogedor.",
      author: "Pablo Garcia, La Paz, enero 2025"
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.quote}"</p>
            <span>- {testimonial.author}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials