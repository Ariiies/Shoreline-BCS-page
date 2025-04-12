import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './styles/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
    <main>
      <Hero/>
      <Testimonials />
      <Features/>
      <CTA/>  
      <Footer/>
    </main>
    </>
  )
}

export default Home