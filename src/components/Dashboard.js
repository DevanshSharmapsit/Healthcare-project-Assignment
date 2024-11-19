import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, CircularProgress, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log({ name, age, file });
      setLoading(false);
      alert('Form submitted successfully!');
    }, 2000);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Healthcare Dashboard
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="age-select-label">Age</InputLabel>
          <Select
            labelId="age-select-label"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          >
            {[...Array(101).keys()].slice(1).map((ageValue) => (
              <MenuItem key={ageValue} value={ageValue}>
                {ageValue}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          component="label"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Upload File
          <input
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Button>
        {loading ? (
          <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
        ) : (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 3 }}
          >
            Submit
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Dashboard;
