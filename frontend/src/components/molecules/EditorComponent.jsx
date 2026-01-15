import React, { useEffect, useState } from "react";

import Editor from "@monaco-editor/react";

const EditorComponent = () => {
  const [editorState, setEditorState] = useState({
    theme: null,
  });
  async function downloadTheme() {
    const response = await fetch("/Dracula.json");
    const data = await response.json();
    setEditorState({ ...editorState, theme: data });
  }

  useEffect(() => {
    downloadTheme();
  }, []);

  return (
    <div>
      {editorState.theme &&
        <Editor
          height={"80vh"}
          width={"100%"}
          defaultLanguage="javascript"
          defaultValue="Welcome"
          options={{
            fontSize: 18,
            fontFamily: "monospace",
          }}
          onMount={(editor, monaco) => {
            monaco.editor.defineTheme("dracula", editorState.theme);
            monaco.editor.setTheme("dracula");
          }}
        /> 
      }

      
    </div>
  );
};

export default EditorComponent;
