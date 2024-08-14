import React from 'react';
import './Beneficiarios.css';

export const Beneficiarios = () => {
  return (
    <section className="beneficiarios-container">
  <h2 className="beneficiarios-title">BENEFICIARIOS</h2>
  <hr className="beneficiarios-divider" />
  <p className="beneficiarios-question">
    ¿A qué grupo impacta nuestra idea innovadora y de qué manera lo hace?
  </p>
  <div className="beneficiarios-content">
    <p className="beneficiarios-description">
      EstudIA brinda a los estudiantes una experiencia interactiva y dinámica, facilitando el aprendizaje a través de un chat que responde dudas en diversas áreas de estudio. Además, simula interacciones con personajes destacados, lo que ayuda a los estudiantes de educación básica a acceder de manera más sencilla a las nuevas tecnologías de inteligencia artificial.
    </p>
    <div className="beneficiarios-images-grid">
      <img src={require('../../assets/images/einstein.png')} alt="Einstein" className="beneficiarios-image" />
      <img src={require('../../assets/images/galileo.png')} alt="Galileo" className="beneficiarios-image" />
      <img src={require('../../assets/images/tesla.png')} alt="Tesla" className="beneficiarios-image" />
      <img src={require('../../assets/images/curie.png')} alt="Curie" className="beneficiarios-image" />
    </div>
  </div>
</section>

  );
};
