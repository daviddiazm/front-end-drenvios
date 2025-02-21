import { useEffect, useState } from 'react'
import './App.css'
import ListPage from './pages/ListPage/ListPage';
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router";
import NavBar from './components/navBar/navBar';
import FormPage from './pages/FormPage/FormPage';


function App() {

  const [isInForm, setIsInForm] = useState(false)


  return (
    <>
      <section className='presentacion'>
        <img src="https://cdn.drenvio.com/logo/drenvio.svg" alt="" srcset="" />
        <h4>Este es el front end de mi prueba tecnica</h4>
        <p>Att: <a href="https://www.linkedin.com/in/david-diaz-a845ab25a/">David Diaz Montengro</a> </p>
      </section>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/create_user" element={<FormPage />} />
        </Routes>
      </BrowserRouter>

      <img className='img_hero' src="https://cdn.drenvio.com/co/hero/cotizador.webp" width="600" height="380" alt="Envios nacionales e internacionales con DrEnvio" data-astro-cid-36xqwagk=""></img>
    </>
  )
}

export default App
