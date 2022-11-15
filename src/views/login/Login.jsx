import  React, { useEffect, useState } from "react";

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';

import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import "./login.css";

import { useForm } from '../../components/hooks/useForm';

//REDUX
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import { fetchUsuario } from "../../redux/actions/login";

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


//LOGIN
const Login = ({fetchUsuario }) => {
  //const [email, setUsuario] = useState('')
  const[errorMessage, setErrorMessage] = useState (null)

  const [ formLoginValues, handleLoginInputChange ] = useForm({
    lEmail: '',
    lPassword:'',
});
  
const { lEmail,lPassword } = formLoginValues;

const handleLogin = ( e ) => {
  e.preventDefault();
  fetchUsuario(lEmail,lPassword);

  console.log(lEmail)
  console.log(lPassword)
}
  


  return (

<div class="container-fluid2 ps-md-0">
  <div class="row g-0">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-2">BIENVENIDO</h3>
            <hr /><br />

              <form onSubmit={ handleLogin } >
                <div class="form-floating mb-3">

                <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={ lEmail }
                                onChange={ handleLoginInputChange }
                            />


                     
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={ lPassword }
                                onChange={ handleLoginInputChange }
                            />
                        
                 
                </div>
                

                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                  <label class="form-check-label" for="rememberPasswordCheck" >
                    Remember password
                  </label>
                </div>
                <br />
                <div class="d-grid">

                <Button
                type="submit"
                fullWidth
                variant="contained"
                
                sx={{ mt: 3, mb: 2 }}
               
              >
                Sign In
              </Button>
                 
                </div>

                <p style={{color:"red"}}>{errorMessage}</p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
  );
}


//SACAR DEL ESTADO 
const mapStateToProps = state => ({
  
  data: state.buscadorUsuario.data
})

//{login} LO PASAMOS ARRIBA 
//connect ES EL QUE SE ENCARGA DE CONECTAR LAS ACCIONES CON EL COMPONENTE 
export default connect(mapStateToProps, { fetchUsuario })(Login)