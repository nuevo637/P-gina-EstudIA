import React from 'react';
import './Nav.css'; 
import logo from '../../assets/images/Logo_estudIA.png'; 

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#a0724e' }}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" className="logo" />
          <span className="ms-2 text-white fw-bold">estudIA</span>
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#inicio" className="nav-link text-dark btn btn-warning mx-2">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#acerca" className="nav-link text-dark btn btn-warning mx-2">Acerca</a>
            </li>
            <li className="nav-item">
              <a href="#beneficiarios" className="nav-link text-dark btn btn-warning mx-2">Beneficiarios</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
