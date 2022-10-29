import React from 'react'
import '../../styles/StyleForm.css'
import { useForm } from '../../components/hooks/useForm';
import { connect } from 'react-redux'

import { fetchRegistroUsuario } from "../../redux/actions/registro";

const Registro = ({fetchRegistroUsuario }) =>   {

  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
   
    rEmail: '',
    rPassword1: '',
    rName: '',
    
});


const {  rEmail, rPassword1, rName} = formRegisterValues;


const handleRegister = ( e ) => {
  e.preventDefault();


  fetchRegistroUsuario( rEmail, rPassword1, rName)
 

}

  return (
    <div class="wrapper2 fadeInDown">
        <div id="formContent">

          <h2 class="active"> Registrar Productor </h2>

          <form onSubmit={ handleRegister }>

          <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={ rEmail }
                                onChange={ handleRegisterInputChange }
                            />


<input
                                type="text"
                                className="form-control"
                                placeholder="Contraseña"
                                name="rPassword1"
                                value={ rPassword1 }
                                onChange={ handleRegisterInputChange }
                            />

          <input 
                                type="text"
                                className="form-control"
                                placeholder="nombre"
                                name="rName"
                                value={ rName }
                                onChange={ handleRegisterInputChange }
                            />

         


                     
                           

           
           
            {/* <input type="submit" class="fadeIn fourth" value="Enviar" /> */}

<button class="btn btn-primary btn-left me-md-2" > Enviar</button>
          </form>


    

        </div>
      </div>
  )
}

const mapStateToProps = state => ({
  
  data: state.registro.data
})

//{login} LO PASAMOS ARRIBA 
//connect ES EL QUE SE ENCARGA DE CONECTAR LAS ACCIONES CON EL COMPONENTE 
export default connect(mapStateToProps, { fetchRegistroUsuario })(Registro)