// App.jsx
import { useState } from 'react';
import axios from 'axios';
import './index.css';
import EditorComp from './components/EditorComp';
import Response from './components/Response';

const App = () => {

  const [code, setCode] = useState('');
  const [output, setOutput] = useState('Esperando código...');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const runCode = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/execute", { code });
      console.log("Respuesta del backend:", res.data);

      try{
        const { message, errorMessage } = res.data;
        setMessage(message);
        setErrorMessage(errorMessage);

        setOutput(message || "Sin salida.");
      } catch (err) {
        console.log("Error al procesar la respuesta del backend:", err);
      }

      
      
    } catch (err) {
      setOutput("Error al conectar con el backend.");
    }
  };

  return (
    <div class="grid-container">
      <header class="header">header</header>
      <nav class="navbar">navbar</nav>
      <aside class="sidebar">Sidebar</aside>
      <article class="main">
        <h2>Mi Editor de Código</h2>
        <button onClick={runCode}>Run</button>
        <EditorComp code={code} setCode={setCode} />
        <Response output={output} />
      </article>
      <footer class="footer">footer</footer>
    </div>
    
  );
};

export default App;
