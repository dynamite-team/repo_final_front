
import { fetchSinToken} from '../../helpers/fetch';

import {
  
  FETCH_USUARIO_REQUEST,
  FETCH_USUARIO_SUCCESS,
  FETCH_USUARIO_ERROR,
 

} from "../tipos/types";


export const fetchUsuarioRequest = () => {

  return {

    type: FETCH_USUARIO_REQUEST


  }

}





export const fetchUsuarioSuccess = (Email) => {

  return {

    type: FETCH_USUARIO_SUCCESS,
    payload: Email

  }

}

export const fetchUsuarioError = (error) => {

  return {

    type: FETCH_USUARIO_ERROR,
    payload: error


  }

}




export const fetchUsuario = (email) => {


return async( dispatch ) => {

  const resp = await fetchSinToken( 'auth', { email}, 'POST' );
  const body = await resp.json();

console.log(body)

  if( body.ok ) {
      localStorage.setItem('token', body.token );
      localStorage.setItem('token-init-date', new Date().getTime() );
      window.location.href= `/Panel`
      dispatch( fetchUsuarioSuccess({
          uid: body.uid,
          email: body.email
      }) )
  } else {
     
    return Swal.fire({position: 'center',icon: 'error',title: "error, revise los datos ingresados",showConfirmButton: false,timer: 1000
    })



  }
  

}


}

export default fetchUsuario;