import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

interface JsonEditorProps {
  value: any;
  onChange?: (newValue: any) => void;
  readOnly?: boolean;
}

function JsonEditor({ value, onChange, readOnly = false }: JsonEditorProps) {
  const [editorValue, setEditorValue] = useState(
    JSON.stringify(value, null, 2)
  );

  useEffect(() => {
    setEditorValue(JSON.stringify(value, null, 2));
  }, [value]);

  const handleEditorChange = (value?: string) => {
    setEditorValue(value ?? '');
    onChange && onChange(value ?? '');
  };

  return (
    <Editor
      height="50vh"
      value={editorValue}
      language="json"
      onChange={handleEditorChange}
      theme="vs-dark"
      options={{
        readOnly,
        minimap: {
          enabled: false,
        },
        folding: false,
        scrollBeyondLastLine: false,
      }}
    />
  );
}

export default JsonEditor;
