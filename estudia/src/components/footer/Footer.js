import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-logo">
        <img src={require('../../assets/images/Logo_estudIA.png')} alt="Logo" className="footer-logo-img" />
        <h2 className="footer-logo-text">estudIA</h2>
      </div>
      <div className="footer-section footer-message">
        <p>"El aprendizaje es un tesoro que seguirá a su dueño a todas partes."</p>
      </div>
  </footer>

  )
}
