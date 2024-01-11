import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Nav from './Nav'; // Import the Nav component
  import bgImage from './assets/bg2.jpg';

function Signin() {
    <Nav/>
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 
  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here (e.g., make an API call, check credentials, etc.)
    console.log('Signin submitted:', { fullName, email, contactNumber, age, username, password });
    // Reset the form after submission
    setFullName('');
    setEmail('');
    setContactNumber('');
    setAge('');
    setUsername('');
    setPassword('');
     
  };

  return (

    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgImage})`, // Set the background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)', // Apply blur to create the frosted effect
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black overlay for dimming
          zIndex: -1,
        }}
      />
      <Paper
        elevation={5}
        sx={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '500px', // Adjust the width as needed
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4" gutterBottom style={{ color: '#1976D2' }}>
          SignUp
        </Typography>
        <form onSubmit={handleSignIn}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Full Name"
                type="text"
                variant="outlined"
                size="small"
                margin="normal"
                value={fullName}
                onChange={handleFullNameChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                size="small"
                margin="normal"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Contact Number"
                type="tel"
                variant="outlined"
                size="small"
                margin="normal"
                value={contactNumber}
                onChange={handleContactNumberChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Age"
                type="number"
                variant="outlined"
                size="small"
                margin="normal"
                value={age}
                onChange={handleAgeChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Username"
                type="text"
                variant="outlined"
                size="small"
                margin="normal"
                value={username}
                onChange={handleUsernameChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                size="small"
                margin="normal"
                value={password}
                onChange={handlePasswordChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            fullWidth
            sx={{ marginTop: '16px' }}
          >
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" mt={2}>
          Do your have an account? <Link  to="/login" style={{ color: '#1976D2' }}>LogIn Here!</Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Signin;
