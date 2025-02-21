import React from 'react'
import { Link } from 'react-router';
import './NavBar.css'
// import { Links, Router, Link } from 'react-router';
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router";


const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/' >Lista de usuarios y productos</Link>
        </li>
        <li>
          <Link to='/create_user' >Crear usuario</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar