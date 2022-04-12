import React from 'react';
import {
  Box,
  Typography,
  Card,
  Button,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Candidate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    email2: '',
    password: '',
    password2: '',
    // agreement:'',
  });

  let name, value;

  const onChange = (e) => {
    name = e.target.name; //name will be replaced by the value of name of the form element
    value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, email2, password, password2 } =
      formData;

    const res = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        email2,
        password,
        password2,
        // agreement,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      console.log('Registration Failed');
    } else {
      navigate('/Dashboard');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 1 / 2,
          padding: 8,
        }}
      >
        <Box
          className='heading'
          sx={{ width: '100%', display: 'flex', justifyContent: 'left' }}
        >
          <Typography variant='h5'>Create An Account</Typography>
        </Box>

        <form method='POST'>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='firstname'
                  required
                  fullWidth
                  id='firstname'
                  label='First Name'
                  onChange={onChange}
                  value={formData.firstname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastname'
                  label='Last Name'
                  name='lastname'
                  onChange={onChange}
                  value={formData.lastname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email'
                  name='email'
                  onChange={onChange}
                  value={formData.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email2'
                  label='Confirm Email'
                  name='email2'
                  onChange={onChange}
                  value={formData.email2}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  onChange={onChange}
                  value={formData.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password2'
                  label='Confirm Password'
                  type='password'
                  id='password2'
                  onChange={onChange}
                  value={formData.password2}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="agreement" color="primary" onClick={onChange}/>}
                  label="By creating an account, you agree to our Terms of Use and Privacy Policy."
                />
              </Grid> */}
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={register}
            >
              Sign Up
            </Button>

            <a href='http://localhost:5000/auth/google'>
              <Button fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                Sign Up With Google
              </Button>
            </a>

            <Link to='/signup'>
              <Button fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                Cancel
              </Button>
            </Link>

            <Grid container justifyContent='center'>
              <Grid item>
                {'Already a registered user? '}
                <Link to='/signin'>Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Card>
    </Box>
  );
}

export default Candidate;
