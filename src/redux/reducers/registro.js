import {
  
    FETCH_REGISTRO_SUCCESS,
    FETCH_REGISTRO_ERROR,
    
   
  
  } from "../tipos/types";

  
  
  const INITIAL_STATE = {
    loading:false,
    data:[],
    error:'',
    
    
  };
  
   
  
  export default function(state = INITIAL_STATE, action){
  
    switch (action.type) {
    
        case FETCH_REGISTRO_ERROR:
          return {
            loading:false,
            data:[],
            error:action.payload
          };
        case  FETCH_REGISTRO_SUCCESS:
        return {
          
          loading:false,
          data:action.payload,
          error:'',
          
        };
      
    
      default:
        return state;
    }
  };
  
  