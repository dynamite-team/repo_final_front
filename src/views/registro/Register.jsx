import React from 'react';
import styled from 'styled-components';
import {
  FormControl, InputLabel, FormHelperText, Input,
  Container, TextField, Button
} from '@mui/material';
import  NavBarBack from '../../components/NavBarBack';



const ContainerPrincipal = styled.div`
  height: 100%;
  width: 100%;
  background: #73a9c2
`;


const Title = styled.div`
font-size: 40px;
font-family: Monserrat;
text-align: center;
font-weight: bold;
`;

const Label = styled.label`
font-size: 20px;
font-family: Monserrat;
text-align: left;
`;

const Register = () => {
  return (
    <>
  
      <ContainerPrincipal>
      <NavBarBack
    color="navbar navbar-expand-lg bg-light"
    colorIcon= "blue"/>
        <Container maxWidth="md" style={{ 'backgroundColor': '#FFFF', 'borderRadius': '5%', 'marginTop': '2%'}}>

          <Title>Registro de productores</Title>
          <FormControl fullWidth>
            <TextField  margin='dense' id="standard-basic" label="Nombre y Apellido" variant="outlined" />
            <TextField margin='dense' id="standard-basic" label="DNI" variant="outlined" />
            <TextField margin='dense' id="standard-basic" label="Numero de telefono" variant="outlined" />
            <Label>Datos de domicilio</Label>
            <TextField margin='dense' id="standard-basic" label="Localidad" variant="outlined" />
            <TextField margin='dense' id="standard-basic" label="Departamento" variant="outlined" />
            <TextField margin='dense' id="standard-basic" label="Calle" variant="outlined" />
            <TextField margin='dense' id="standard-basic" label="Casa" variant="outlined" />
            <Label>Datos asociacion</Label>
            <TextField margin='dense' id="standard-basic" label="Codigo" variant="outlined" />
            <TextField margin='dense' id="standard-basic" label="Nombre y Apellido" variant="outlined" />
            <TextField margin='dense' id="standard-basic" label="Nombre y Apellido" variant="outlined" />
            
          </FormControl>

          <Button style={{ 'marginTop': '5%', 'display': ' block', 'margin': '0 auto' }} color='success' variant="contained">Registrar</Button>
        </Container>
      </ContainerPrincipal>




    </>
  )

}

export default Register;