import Drawer from '@mui/material/Drawer';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const drawerWidth = 450;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const columns: GridColDef[] = [
  {
    field: 'syntax',
    headerName: 'Syntax',
    width: 100,
  },
  {
    field: 'description',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },
  {
    field: 'example',
    headerName: 'Example',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },
];

const rows = [
  { id: 1, syntax: '[condition]', description: 'some description' },
  { id: 2, syntax: '/', description: 'some description' },
  { id: 3, syntax: ':', description: 'some description' },
  { id: 4, syntax: '.', description: 'some description' },
];
function HelpDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="subtitle1" color="text.secondary">
            Quick References
          </Typography>
          <IconButton onClick={onClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Drawer>
    </Drawer>
  );
}

export default HelpDrawer;
