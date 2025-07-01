// Editor.jsx
import { Editor } from '@monaco-editor/react';
import React from 'react';

const EditorComp = ({ code, setCode }) => {
  return (
    <div>
      <Editor class='codeeditor'
        defaultLanguage="java"
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default EditorComp;
