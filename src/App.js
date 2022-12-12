import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


import Moderate from './pages/moderation/Moderate';
import Jobs from './pages/Jobs';
import Login from './pages/Login';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [token, setToken] = React.useState(null);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" pr={3} >
            Admin Panel
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ flexGrow: 1 }}>
          
          <MenuItem  component={Link} to="/moderate">
          
                  <Typography  textAlign="center">Moderate Laptops</Typography>
          </MenuItem>
          <MenuItem component={Link} to="/jobs">
                  <Typography  textAlign="center">Run Jobs</Typography>
          </MenuItem>
          </Stack>

          <MenuItem >
                  <Typography textAlign="center" onClick={()=>setToken(null)}>Log Out</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Container >

      <Routes>
            <Route path={"/"} element={
              <Login token={token} setToken={setToken} />} />
              <Route path={"/login"} element={
                <Login token={token} setToken={setToken} />} />
            <Route path={"/jobs"} element={
              <Jobs token={token} />} />
              <Route path={"/moderate"} element={
                <Moderate token={token} />} />
        </Routes>

      </Container>
    </Box>
    </ThemeProvider>
  );
}

export default App;
