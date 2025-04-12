import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './home.jsx';
import Gallery from './gallery.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importado como "Router"

function App() {
  return (
    <Router> {/* Usa "Router" en lugar de "BrowserRouter" */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
