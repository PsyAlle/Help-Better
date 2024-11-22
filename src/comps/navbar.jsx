import { useAuth0 } from "@auth0/auth0-react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from "./btn/loginBtn";
import LogoutButton from "./btn/LogOutBtn";
import { Auth0Provider } from '@auth0/auth0-react';
import { Link } from "react-router-dom";


function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
        
    <AppBar position="fixed">
      <Toolbar >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button component={Link} to="./" variant="contained" color="secondary" sx={{mr: 3}}> Home </Button>
        <LoginButton /> <LogoutButton />
    
      </Toolbar>
    </AppBar>
    <Toolbar />
    {isAuthenticated && <LogoutButton />}
        {isAuthenticated && <LoginButton />}
  </Box>
  );
}

export default Navbar;