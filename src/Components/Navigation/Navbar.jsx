import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Toolbar
        variant='dense'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box sx={{ display: 'inline-flex' }}>
          <Typography variant='h6' component='div'>
            Logo
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ul
              className='nav'
              style={{
                listStyle: 'none',
                width: '50em',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <li className='nav-item'>Hire Talent</li>
              <li className='nav-item'>I'm a Geek</li>
              <li className='nav-item'>Find Jobs</li>
              <li className='nav-item'>
                <Link to='signup'>
                  <Button variant='contained' color='primary'>
                    Login or Sign Up
                  </Button>
                </Link>
              </li>
              {/* <li><Drawer /></li> */}
            </ul>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
