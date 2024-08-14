import React from 'react'
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';

export const Acerca = () => {
  return (
    <section className="container-fluid" style={{ backgroundColor: '#FFFCBB' }}>
      <div className="container-sm ps-5 pe-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h3 className="text-center pt-5 pb-2">ACERCA</h3>
        <hr style={{
          border: '0',
          borderRadius: '10px',
          height: '10px',
          backgroundColor: '#FFBB00',
          width: '50px',
          margin: '10px auto',
          opacity: '1' 
        }} />
        <p className="text-center pt-2 pb-3 fs-5">
          EstudIA es una plataforma web en la que los estudiantes pueden interactuar 
          directamente con diferentes chatbots de inteligencia artificial para poder 
          resolver dudas respecto a diferentes temas del colegio.
        </p>

        <p className="text-center pt-2 pb-4 fs-5" style={{ maxWidth: '500px', margin: '0 auto' }}>
        Los estudiantes podrán interactuar con IAs especializadas en los siguientes temas:
        </p>

        <div className='container' style={{maxWidth: '700px'}}>
          <div className='row' style={{ height: '200px' }}>
            <div className='col d-flex align-items-center justify-content-center' 
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }}
            > 
              <p className='text-center mb-0 fs-4 text-white'>Matemáticas</p>
            </div>
            <div className='col d-flex align-items-center justify-content-center' 
              style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }}
            > 
              <p className='text-center mb-0 fs-4 text-white mx-5 px-5'>Ciencias y Tecnología</p>
            </div>
          </div>

          <div className='row' style={{ height: '200px' }}>
            <div className='col d-flex align-items-center justify-content-center' 
              style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }}
            > 
              <p className='text-center mb-0 fs-4 text-white'>Historia</p>
            </div>
            <div className='col d-flex align-items-center justify-content-center' 
              style={{
                backgroundImage: `url(${img4})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }}
            > 
              <p className='text-center mb-0 fs-4 text-white'>Ingles</p>
            </div>
          </div>

          <div className='row' style={{ height: '200px' }}>
          <div className='col d-flex align-items-center justify-content-center' 
              style={{
                backgroundImage: `url(${img5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }}
            > 
              <p className='text-center mb-0 fs-4 text-white'>Comunicación</p>
            </div>
            <div className='col d-flex align-items-center justify-content-center' 
              style={{
                backgroundImage: `url(${img6})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }}
            > 
              <p className='text-center mb-0 fs-4 text-white'>Arte</p>
            </div>
          </div>
        </div>

        <p className="text-center pt-5 pb-5 fs-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Los alumnos podrán preguntar a un personaje histórico acerca de sus hazañas, a un profesor de matemática sobre ejemplos de un tipo de problemas, a un animal en peligro de extinción acerca de sus características y entre muchas cosas más.
        </p>

      </div>
    </section>
  );
}
