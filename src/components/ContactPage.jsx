import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';



const ContactPage= () => {
 
  

  return (
    <>
   <h1 >   pagina de contacto    </h1>
    <Link to="/">
          <button className="back-btn">Home</button>
    </Link>
    </>
  );
}
export default ContactPage;