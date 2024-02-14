import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validation logic
    if (!/^[a-z]{1,30}$/.test(formData.name)) {
      newErrors.name = 'Name must be lowercase and have a maximum of 30 characters';
    }

    if (!/^[a-zA-Z\s]{1,100}$/.test(formData.companyName)) {
      newErrors.companyName = 'Company name must have a maximum of 100 characters';
    }

    if (formData.email.toLowerCase() !== formData.email) {
      newErrors.email = 'Email address must be lowercase';
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,18}$/.test(formData.password)) {
      newErrors.password = 'Password must be 8-18 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }

    setErrors(newErrors);

    // If no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Sign Up</Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        sx={{ mb: 2 }} // Example of applying CSS styles using sx prop
      /><br/>
      <TextField
        label="Company Name"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        error={!!errors.companyName}
        helperText={errors.companyName}
        sx={{ mb: 2 }} // Example of applying CSS styles using sx prop
      /><br/>
      <TextField
        type="email"
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        sx={{ mb: 2 }} // Example of applying CSS styles using sx prop
      /><br/>
      <TextField
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        sx={{ mb: 2 }} // Example of applying CSS styles using sx prop
      /><br/>
      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
