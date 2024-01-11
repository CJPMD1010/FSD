import React from 'react';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import bgImage from './assets/bg2.jpg';
 
function Home() { 

  const backgroundStyle = {
    height: '100vh',
    position: 'relative',
    background: `url(${bgImage}) center/cover`,
    textAlign: 'center',
    color: '#fff',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
  };
 
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={backgroundStyle}
    >
      <div style={overlayStyle}></div>
      <Typography variant="h1" style={{ fontSize: '3.5em', marginBottom: '20px', color: '#fff', zIndex: 2, textShadow: '2px 4px 6px #000', fontWeight: 'bold' }}>
        Welcome to <span style={{ color: '#fff', letterSpacing: '3px' }}><span style={{ color: '#007BFF' }}>N</span>ext<span style={{ color: '#007BFF' }}>G</span>en</span>
      </Typography>
      <Typography variant="body1" style={{ fontSize: '1.2em', marginBottom: '30px', fontStyle: 'italic', color: '#fff', zIndex: 2 }}>
        Explore the future with us, where technology meets imagination.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{
          padding: '10px 20px',
          fontSize: '1em',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, transform 0.3s ease',
          '&:hover': {
            backgroundColor: '#0056b3',
            transform: 'scale(0.95)',
          },
          zIndex: 2,
        }}
       >
        Register
      </Button>
    </Grid>
  );
}

export default Home;
