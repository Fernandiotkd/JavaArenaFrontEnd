// Response.jsx
import React from 'react';

const Response = ({ output  }) => {
  return (
    <div style={{ height: '150px', border: '1px solid #ccc', padding: '10px', backgroundColor: '#f9f9f9' }}>
      <h3>Respuesta del backend:</h3>
      <div>{output}</div>
      <h3>Fin Respuesta del backend2:</h3>
    </div>
  );
};

export default Response;
