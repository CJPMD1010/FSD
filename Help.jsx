// ContactUs.jsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bgImage from './assets/bg2.jpg'; // Import the background image

const backgroundStyle = {
  background: `url(${bgImage})`,
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const formStyle = {
  width: '300px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  marginBottom: '16px',
  width: '100%',
};

const buttonStyle = {
  marginTop: '16px',
  width: '100%',
};

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div style={backgroundStyle}>
      <h2 style={{ color: 'white' }}>Contact Us</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Your Email"
          type="email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          style={inputStyle}
        />
        <TextField
          id="concerns"
          label="Report Your Concerns"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          style={inputStyle}
        />
        <Button type="submit" variant="contained" color="primary" style={buttonStyle}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactUs;
