// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside style={{ width: '80%', height: '90%', backgroundColor: '#282c34', color: 'white', padding: '20px', }}>
      <h2>Sidebar</h2>
      <nav>
        <ul>
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;