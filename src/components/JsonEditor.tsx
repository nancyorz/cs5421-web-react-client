import { useState } from "react";
import Editor from "@monaco-editor/react";

interface JsonEditorProps {
  value: any;
  onChange: (newValue: any) => void;
  readOnly?: boolean;
}

function JsonEditor({ value, onChange, readOnly = false }: JsonEditorProps) {
  const [editorValue, setEditorValue] = useState(
    JSON.stringify(value, null, 2)
  );

  const handleEditorChange = (_, newValue: string) => {
    setEditorValue(newValue);
  };

  const handleSave = () => {
    const newValue = JSON.parse(editorValue);
    onChange(newValue);
  };

  return (
    <>
      <Editor
        height="200px"
        value={editorValue}
        language="json"
        onChange={handleEditorChange}
        options={{
          readOnly,
          minimap: {
            enabled: false,
          },
          lineNumbers: "off",
          folding: false,
          scrollBeyondLastLine: false,
        }}
      />
      {!readOnly && (
        <div>
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </>
  );
}

export default JsonEditor;