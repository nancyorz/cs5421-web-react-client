import Typography from '@mui/material/Typography';

function Footer({ className }: { className?: string }) {
  return (
    <Typography
      variant="subtitle2"
      color="text.secondary"
      className={className}
    >
      CS5421.Group28.Topic5
    </Typography>
  );
}

export default Footer;
