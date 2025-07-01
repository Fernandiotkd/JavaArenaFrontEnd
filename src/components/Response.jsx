// Response.jsx
import React from 'react';

const Response = ({ output }) => {
  return (
    <div style={{ height: '150px', border: '1px solid #ccc', padding: '10px', backgroundColor: '#f9f9f9' }}>
      <h3>Respuesta del backend:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Response;
