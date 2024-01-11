import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
 
// Import the background image
import bgImage from './assets/bg2.jpg'; // Import the background image

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., make an API call, check credentials, etc.)
    console.log('Login submitted:', { username, password });
    // Reset the form after submission
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
          backgroundImage: `url(${bgImage})`,
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
          width: '300px',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4" gutterBottom style={{ color: '#1976D2' }}>
          NextGen
        </Typography>
        <form onSubmit={handleSubmit}>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            fullWidth
            sx={{ marginTop: '16px' }}
          >
            Login
          </Button><br/><br/>
          <Link   to="/login" variant="body2" sx={{marginTop: '30em', marginLeft: '6.5em', marginTop: '8px' }}>
            Forgot Password?
          </Link>
         <Typography variant="body2" mt={2} sx={{ marginLeft: '2.5em' }}>
  Don't have an account? <Link   to="/signin" style={{ color: '#1976D2' }}>SignUp Here!</Link>
</Typography>

        </form>
      </Paper>
    </Box>
  );
}

export default Login;
