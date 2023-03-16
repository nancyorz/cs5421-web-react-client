import { useState } from 'react';
import { TextField, Button } from '@mui/material';

function InputArea({ onQuery, placeholder }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleQuery = () => {
    onQuery(query);
  };

  return (
    <>
      <TextField
        fullWidth
        multiline
        minRows={5}
        maxRows={10}
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        variant="outlined"
      />
      {onQuery && (
        <Button variant="contained" onClick={handleQuery}>
          Submit
        </Button>
      )}
    </>
  );
}

export default InputArea;
