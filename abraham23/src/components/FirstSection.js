import React from 'react';
import './FirstSection.css';

const FirstSection = () => {
  return (
    <section className="first-section">
      {/* Aire Contaminado */}
      <div className="feature">
        <div
          className="image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80')",
          }}
        ></div>
        <h3>Contaminación del Aire</h3>
        <p>
          La contaminación del aire afecta gravemente la salud humana, causando
          enfermedades respiratorias y cardiovasculares.
        </p>
      </div>

      {/* Contaminación del Agua */}
      <div className="feature">
        <div
          className="image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80')",
          }}
        ></div>
        <h3>Contaminación del Agua</h3>
        <p>
          Los residuos tóxicos y plásticos contaminan ríos y mares, amenazando
          la vida acuática y el suministro de agua potable.
        </p>
      </div>

      {/* Contaminación del Suelo */}
      <div className="feature">
        <div
          className="image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505731521551-333d2f43ed6f?auto=format&fit=crop&w=800&q=80')",
          }}
        ></div>
        <h3>Contaminación del Suelo</h3>
        <p>
          El uso excesivo de químicos y la mala gestión de residuos dañan los
          suelos, reduciendo su fertilidad.
        </p>
      </div>

      {/* Contaminación Acústica */}
      <div className="feature">
        <div
          className="image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517568477745-0b9bf50cbe29?auto=format&fit=crop&w=800&q=80')",
          }}
        ></div>
        <h3>Contaminación Acústica</h3>
        <p>
          El ruido constante en entornos urbanos afecta la salud mental y causa
          estrés y problemas auditivos.
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
