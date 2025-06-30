import { useState } from 'react'
import Editor from "@monaco-editor/react";
import axios from 'axios';
import './App.css'

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
    <div>
      <h1>Java Online Runner</h1>
      <Editor
        height="40vh"
        width="80vh"
        defaultLanguage="java"
        value={code}
        onChange={(value) => setCode(value)}
      />
      <button onClick={runCode}>Ejecutar</button>
      <pre>{output}</pre>
    </div>
  );
};

export default App;