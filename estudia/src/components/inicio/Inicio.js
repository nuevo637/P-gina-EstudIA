import React from 'react'
import chicosImage from '../../assets/images/ilustracion1.png';
import logo from '../../assets/images/Logo_estudIA.png';

export const Inicio = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Columna Izquierda Superior */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={chicosImage} 
            alt="Niños con computadora"
            className="img-fluid"
          />
        </div>
        
        {/* Columna Derecha Superior */}
        <div 
          className="col-md-6 d-flex flex-column justify-content-center align-items-start p-4 rounded" 
          style={{ backgroundColor: '#FAF4D2' }}
        >
          <h1 className="display-4">¡Bienvenidos a <strong>estudIA</strong>!</h1>
          <p className="lead">
            La plataforma virtual donde los niños pueden explorar, aprender y divertirse con ayuda de la inteligencia artificial.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        {/* Columna Izquierda Inferior */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={logo} 
            alt="Icono didáctico"
            className="img-fluid"
          />
        </div>
        
        {/* Columna Derecha Inferior */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
          <p className="lead">
            En estudIA, ofrecemos un espacio seguro y entretenido donde los niños pueden interactuar con contenido educativo en áreas como Matemáticas, Historia, Ciencias, Inglés, Arte y más. Aquí, aprender es una aventura llena de descubrimientos y diversión.
          </p>
        </div>
      </div>
    </div>
  )
}
