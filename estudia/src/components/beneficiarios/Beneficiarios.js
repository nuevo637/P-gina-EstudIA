import React from 'react';
import './Beneficiarios.css';
import globeImage from '../../assets/images/countries.png';

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
        <div className="beneficiarios-image">
          <img src={globeImage} alt="Banderas" className="rotating-globe" />
        </div>
      </div>
    </section>
  );
};
