import React from 'react'
import '../../styles/StyleForm.css'

export default function Register ()  {
  return (
    <div class="wrapper2 fadeInDown">
        <div id="formContent">

          <h2 class="active"> Inicio de Sesion </h2>

          <form>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="Nombre de usuario" />
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="Constraseña" />
            <input type="text" id="passwordConfirm" class="fadeIn third" name="login" placeholder="Confirme su contraseña" />
            <input type="submit" class="fadeIn fourth" value="Registrarse" />
          </form>


    

        </div>
      </div>
  )
}

