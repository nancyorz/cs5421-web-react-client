import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import { SnackbarProvider, VariantType, enqueueSnackbar } from 'notistack';

import InputArea from './components/InputArea';
import HelpDrawer, { drawerWidth } from './components/HelpDrawer';
import JsonEditor from './components/JsonEditor';
import Footer from './components/Footer';

const navItems = ['Home', 'Our Team'];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps & { open?: boolean }>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MyFooter = styled(Footer)(() => ({
  position: 'fixed',
  width: '100%',
  bottom: '5vh',
  textAlign: 'center',
}));

const toast = (message: string, variant: VariantType) => {
  enqueueSnackbar(message, {
    variant,
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
  });
};

function App() {
  const [json, setJson] = useState({ a: '123' });
  const [result, setResult] = useState({ a: 456 });
  const [helpDrawerOpen, setHelpDrawerOpen] = useState(false);

  const handleQueryByXPath = async (query: string) => {
    console.log(query);
    console.log(json);

    const request = new Request('/api/query', {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
      }),
      body: JSON.stringify({
        query,
        source: json,
      }),
    });

    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ data }) => {
        toast('Submitted Successfully', 'success');
      })
      .catch((err) => {
        const errorMsg = err?.message || 'Network error';
        toast(errorMsg, 'error');
        throw new Error(errorMsg);
      });
  };

  const handleOnChangeJson = (jsonString: string) => {
    console.log(jsonString);
    setJson(JSON.parse(jsonString));
  };

  const handleOpenHelpDrawer = () => {
    setHelpDrawerOpen(true);
  };

  const handleCloseHelpDrawer = () => {
    setHelpDrawerOpen(false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ce93d8',
      },
    },
  });

  return (
    // <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleOpenHelpDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            XPATH FOR JSON
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <HelpDrawer open={helpDrawerOpen} onClose={handleCloseHelpDrawer} />
      <Main open={helpDrawerOpen}>
        <Box p={2}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputArea
                    onQuery={handleQueryByXPath}
                    placeholder="Please input XJSON syntax"
                  />
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Input JSON</Typography>
                    <JsonEditor value={json} onChange={handleOnChangeJson} />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Output JSON</Typography>
                    <JsonEditor value={result} readOnly />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Main>
      <MyFooter />
    </SnackbarProvider>
    // </ThemeProvider>
  );
}

export default App;
