import { Box, Typography } from '@mui/material';

interface ResultAreaProps {
  result: string;
}

function ResultArea({ result }: ResultAreaProps) {
  return (
    <Box sx={{ minHeight: 100 }}>
      <Typography variant="subtitle1">查询结果：</Typography>
      {result ? (
        <Box sx={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(result)}</Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          还没有查询结果
        </Typography>
      )}
    </Box>
  );
}

export default ResultArea;
