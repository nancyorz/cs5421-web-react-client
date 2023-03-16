import { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import InputArea from './components/InputArea';
import ResultArea from './components/ResultArea';
import HelpDialog from './components/HelpDialog';
import JsonEditor from './components/JsonEditor';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const navItems = ['Home', 'Our Team'];

function App() {
  const [queryType, setQueryType] = useState('xpath');
  const [result, setResult] = useState({ a: 123 });
  const [config, setConfig] = useState({ a: '123' });
  const [helpDialogOpen, setHelpDialogOpen] = useState(true);

  const handleQueryByXPath = (query) => {
    // 根据用户输入的 xpath 语法查询数据
    // 并将结果存储到 result 状态中
    setResult(data);
    setQueryType('xpath');
  };

  const handleQueryByConfig = (config) => {
    // 根据用户输入的 JSON 配置和 xpath 语法查询数据
    // 并将结果存储到 result 状态中
    setResult(data);
    setConfig(config);
    setQueryType('config');
  };

  const handleOpenHelpDialog = () => {
    setHelpDialogOpen(true);
  };

  const handleCloseHelpDialog = () => {
    setHelpDialogOpen(false);
  };

  // return (
  //   <>
  //     <Grid container spacing={2}>
  //       <Grid item xs={12} sm={6}>
  //         <InputArea
  //           onQuery={queryType === 'xpath' ? handleQueryByXPath : null}
  //           placeholder="输入 xpath 语法"
  //         />
  //         <JsonEditor onChange={handleQueryByConfig} />
  //         <Typography variant="caption" sx={{ mt: 2 }}>
  //           提示：在输入框内输入 xpath 或 JSON 语法时，可使用自动完成和语法提示
  //         </Typography>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <ResultArea result={result} />
  //         {/* {config && ( */}
  //         <Box sx={{ mt: 2 }}>
  //           <Typography variant="subtitle1">配置信息：</Typography>
  //           <JsonEditor value={config} readOnly />
  //         </Box>
  //         {/* )} */}
  //       </Grid>
  //     </Grid>
  //     <HelpDialog open={helpDialogOpen} onClose={handleCloseHelpDialog} />
  //   </>
  // );
  // return (
  //   <>
  //     <Grid container spacing={2}>
  //       <Grid item xs={12} sm={6}>
  //         <Box sx={{ mb: 2 }}>
  //           <Typography variant="h5" gutterBottom>
  //             输入
  //           </Typography>
  //           <InputArea
  //             onQuery={queryType === 'xpath' ? handleQueryByXPath : null}
  //             placeholder="输入 xpath 语法"
  //             label="XPath"
  //           />
  //           <JsonEditor onChange={handleQueryByConfig} label="JSON" />
  //           <Typography variant="body2" sx={{ mt: 2 }}>
  //             提示：在输入框内输入 xpath 或 JSON
  //             语法时，可使用自动完成和语法提示
  //           </Typography>
  //         </Box>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Box sx={{ mb: 2 }}>
  //           <Typography variant="h5" gutterBottom>
  //             结果
  //           </Typography>
  //           <ResultArea result={result} />
  //           {/* {config && ( */}
  //           <Box sx={{ mt: 2 }}>
  //             <Typography variant="subtitle1">配置信息：</Typography>
  //             <JsonEditor value={config} readOnly />
  //           </Box>
  //           {/* )} */}
  //         </Box>
  //       </Grid>
  //     </Grid>
  //     <Button variant="contained" onClick={handleOpenHelpDialog} sx={{ mt: 2 }}>
  //       帮助
  //     </Button>
  //     <HelpDialog open={helpDialogOpen} onClose={handleCloseHelpDialog} />
  //   </>
  // );

  return (
    <AppBar component="nav">
      <Toolbar>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton> */}
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
  );
}

export default App;
