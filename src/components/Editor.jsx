// Editor.jsx
import React from 'react';

const Editor = ({ code, setCode }) => {
  return (
    <div style={{ flex: 1, border: '1px solid #ccc', marginBottom: '10px' }}>
      <textarea
        style={{ width: '100%', height: '100%', resize: 'none' }}
        placeholder="Escribe tu código aquí..."
        value={code}
        onChange={e => setCode(e.target.value)}
      />
    </div>
  );
};

export default Editor;
