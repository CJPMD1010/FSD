// Nav.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from './assets/logo.png';
import { Link } from '@mui/material';

function Nav() {
  const handleReload = (event) => {
    event.preventDefault();
    window.location.reload();
  };



  return (
    <AppBar position="fixed" style={{ backgroundColor: '#001f3f' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ textShadow: '1px 2px 4px #000', fontFamily: 'sans-serif', letterSpacing: 2, fontWeight: 500, color: '#f9f9f9', display: 'flex', alignItems: 'center' }}>
            <Link style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: '35px',
                  marginRight: '10px',
                  borderRadius: '50%',
                  border: '3px solid #000',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              NextGen
            </Link>
          </Typography>

          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <Typography variant="h7" sx={{ color: '#f9f9f9', marginLeft: '61em' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>Home</Link>
              <Link to="/products" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>Products</Link>
              <Link to="/help" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>Help</Link>
            </Typography>
          </div>
        </div>

        <div>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
