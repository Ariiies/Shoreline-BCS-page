import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';



const ContactPage= () => {
 
  

  return (
    <><div className='contact-container'>
        <h1 >   pagina de contacto    </h1>
        <div className='contact-info'>
          <p>Correo: shorelinebcs@gmail.com</p>
          <p>location: Pescader, La Paz, BCS, Mexico.</p>
          <p>tel: 612 123 4567</p>
        </div>
        <div className='contact-form'>
          <h2>Contact Us</h2>
          <form action="https://formspree.io/f/xjvjdqzq" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
    </div>
    <Link to="/">
          <button className="back-btn">Home</button>
    </Link>
    </>
  );
}
export default ContactPage;