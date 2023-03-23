import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

function InputArea({
  onQuery,
  placeholder,
}: {
  onQuery: (value: string) => void;
  placeholder: string;
}) {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event?.target?.value);
  };

  const handleQuery = () => {
    onQuery(query);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={10}>
        <TextField
          fullWidth
          minRows={1}
          maxRows={10}
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" onClick={handleQuery}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default InputArea;
