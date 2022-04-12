import React from 'react'
import {Box, Container, Typography, Card, Button, Grid, TextField, FormControlLabel, Checkbox} from '@mui/material'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

let name, value;

const {email,password} = formData;

const onChange = (e) => {
  name = e.target.name; //name will be replaced by the value of name of the form element
  value = e.target.value;

  setFormData({...formData, [name]:value});
}

const signin = async(e) =>{
  e.preventDefault();
  const {email, password} = formData;

  const res = await fetch("http://localhost:5000/api/users/login",{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
          email,
          password,
      })
  })
  const data = await res.json()
  if(res.status === 400 || !data){
      console.log("Login Failed")
  }else{
      navigate("/Dashboard")
  }
}

  return (
    <Box sx={{display:'flex', justifyContent:'center'}}>
        <Card
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width:1/2,
                padding:8
            }}
        >
          <Box className="heading" sx={{width:'100%', display:'flex', justifyContent:'left'}}>
            <Typography variant="h5" >
                Welcome Back!
            </Typography>
          </Box>

          <form method = "POST">
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  onChange={onChange}
                  value={formData.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={onChange}
                  value={formData.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signin}
            >
              Login now!
            </Button>

            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                login with google
            </Button>

            <Grid container justifyContent="center">
              <Grid item>
              {"new user? "}
                <Link to='/signup'>
                    Sign up!
                </Link>
              </Grid>
            </Grid>
          </Box>
          </form>
        </Card>
        </Box>
  )
}

export default Signin