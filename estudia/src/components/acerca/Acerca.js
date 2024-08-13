import React from 'react'

export const Acerca = () => {
  return (
    <section className="container-fluid" style={{ backgroundColor: '#FFFCBB' }}>
      <div className="container-sm ps-5 pe-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h3 className="text-center pt-3 pb-2">ACERCA</h3>
        <hr style={{
          border: '0',
          borderRadius: '10px',
          height: '10px',
          backgroundColor: '#FFBB00',
          width: '50px',
          margin: '10px auto',
          opacity: '1' 
        }} />
        <p className="text-center pt-2 pb-3">
          EstudIA es una plataforma web en la que los estudiantes pueden interactuar 
          directamente con diferentes chatbots de inteligencia artificial para poder 
          resolver dudas respecto a diferentes temas del colegio.
        </p>

        <p className="text-center pt-2 pb-3" style={{ maxWidth: '500px', margin: '0 auto' }}>
        Los estudiantes podrán interactuar con IAs especializadas en los siguientes temas:
        </p>

      </div>
    </section>
  );
}
