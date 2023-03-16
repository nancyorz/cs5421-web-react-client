import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

function HelpDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>语法提示</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1">XPath 语法</Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {'//bookstore/book[price>35]/title'}
        </Typography>
        <Typography variant="subtitle1">JSON 配置</Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {'{'}
          {'\n  '}
          "condition": {'{'}
          {'\n    '}
          "price": {'{'}
          {'\n      '}
          "$gt": 35{'\n    '}
          {'}'},{'\n    '}
          "author": "John Doe"{'\n  '}
          {'}'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>关闭</Button>
      </DialogActions>
    </Dialog>
  );
}

export default HelpDialog;
