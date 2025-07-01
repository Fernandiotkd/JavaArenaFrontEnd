// Response.jsx
import React from 'react';

const Response = ({ response }) => {
  return (
    <div style={{ height: '150px', border: '1px solid #ccc', padding: '10px', backgroundColor: '#f9f9f9' }}>
      <h3>Respuesta del backend:</h3>
      <pre>{response}</pre>
    </div>
  );
};

export default Response;
