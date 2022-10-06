import  React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Collapse from '@mui/material/Collapse'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import shortid from "shortid";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        DynamiteTeam
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
{/* axxx */}
const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  /* CARGAR DATOS */


  const [usuario, setUsuario] = useState('')
  const [contrasenia, setContrasenia] = useState('')
  const[errorMessage, setErrorMessage] = useState (null)
 
  const iniciarSesion ={
    id: shortid.generate(),
       users: usuario,
       password:contrasenia
   }

   const usersAdmin ={
    id: shortid.generate(),
       userAdmin: "ari",
       passwordAdmin:"ari123",
    
   }
  
   
   const guardarTarea = (e) => {
    e.preventDefault()
		  setUsuario([...usuario,  iniciarSesion])
    setContrasenia([...contrasenia,  iniciarSesion])
  
    console.log(iniciarSesion)
    console.log(usersAdmin.userAdmin)
    console.log(usuario)
    usersAdmin.userAdmin===usuario && usersAdmin.passwordAdmin===contrasenia 
    ?
    window.location.href= `/Panel`
    :
    setErrorMessage('Usuario o Contraseña incorrecta')
    setTimeout(() => {
        setErrorMessage(null)
    }, 3000)
    console.log("Error",e)

	
  

   } 



  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />


        {/*  Imagen del LOGIN  */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://encolombia.com/wp-content/uploads/2021/03/Productos-agricolas.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item xs={12} sm={8} md={5}  elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'blue'  }}/>
          
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => setUsuario(event.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => setContrasenia(event.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={guardarTarea}
              >
                Sign In
              </Button>
              <br/>
              <p style={{color:"red"}}>{errorMessage}</p>
              
					

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}