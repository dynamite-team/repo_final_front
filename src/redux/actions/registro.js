import {
  
    FETCH_REGISTRO_SUCCESS,
    FETCH_REGISTRO_ERROR,
    
   
  
  } from "../tipos/types";

  import { fetchSinToken} from '../../helpers/fetch';


  export const fetchRegistroSuccess = (Usuario) => {

    return {
  
      type: FETCH_REGISTRO_SUCCESS,
      payload:Usuario
  
    }
  
  }

  export const fetchRegistroError = (error) => {

    return {
  
      type:FETCH_REGISTRO_ERROR,
      payload:error
  
    }
  
  }

  export const fetchRegistroUsuario = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
           
            dispatch( fetchRegistroSuccess({
                uid: body.uid,
                email: body.email
            }) )
            window.location.href= `/Panel`
        } else {
          return Swal.fire({position: 'center',icon: 'error',title: "error, revise los datos ingresados",showConfirmButton: false,timer: 1000
        })
        }


    }
}






