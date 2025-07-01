import { useState } from 'react';
import axios from 'axios';
import './index.css';
import EditorComp from './components/EditorComp.jsx';

const App = () => {
  const [code, setCode] = useState(
`public class Main {
  public static void main(String[] args) {
    System.out.println("Hola Paloma, te amo <3");
  }
}`
  );
  const [output, setOutput] = useState('');

  const runCode = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/execute", { code });
      setOutput(res.data.output);
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
        <EditorComp />
        
      </article>
      <footer class="footer">footer</footer>
    </div>
    
  );
};

export default App;
