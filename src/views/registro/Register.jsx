import React from 'react';
import styled from 'styled-components';
import {
  FormControl, InputLabel, FormHelperText, Input,
  Container, TextField, Button
} from '@mui/material';


const ContainerPrincipal = styled.div`
  height: 100%;
  width: 100%;
  background: url('https://i.pinimg.com/564x/ca/30/56/ca305656cc3f354de4277e9bee32b613.jpg')
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
        <Container maxWidth="md" style={{ 'backgroundColor': '#FFFF', 'borderRadius': '5%'}}>

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

          <Button style={{ 'marginTop': '5%', 'display': ' block', 'margin': '0 auto' }} color='success' variant="contained">Contained</Button>
        </Container>
      </ContainerPrincipal>




    </>
  )

}

export default Register;