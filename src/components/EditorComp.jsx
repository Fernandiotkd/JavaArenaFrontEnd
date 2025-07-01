// Editor.jsx
import { Editor } from '@monaco-editor/react';
import React from 'react';
import '../styles/codeeditor.css';

const EditorComp = ({ code, setCode }) => {
  return (
    <div className='codeeditor' style={{ height: '60%', width: '90%' }}>
      <Editor
        defaultLanguage="java"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default EditorComp;
