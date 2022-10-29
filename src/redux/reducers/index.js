import { combineReducers } from "redux";



import  buscadorUsuario  from './login';
import  registro  from './registro';

export default combineReducers({
    buscadorUsuario,
    registro 
})
