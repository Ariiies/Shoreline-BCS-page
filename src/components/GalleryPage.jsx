import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';
import { motion, AnimatePresence } from 'framer-motion';


// Array de imágenes 
const images = [
  '/src/assets/img/work.jpeg',
  '/src/assets/img/work2.png',
  '/src/assets/img/work3.png'/*, Agreagar las imagenes que falten
  '/src/assets/img/work4.jpeg',
  '/src/assets/img/work5.jpeg'*/
];

const GalleryPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  return (
    <section className="gallery">
              <div className="gallery-image">
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              alt={`Imagen ${currentImageIndex + 1}`}
            />
          </AnimatePresence>
        </div>
      <div className="btn-container">
        <button className="btn" onClick={prevImage}>Anterior</button>
        <Link to="/">
          <button className="back-btn">Home</button>
        </Link>
        <button className="btn" onClick={nextImage}>Siguiente</button>
      </div>
    </section>
  );
};

export default GalleryPage;