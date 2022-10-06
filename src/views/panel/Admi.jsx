import React from 'react'
import { Link } from 'react-router-dom'

export default function Admi () {

  return (
      <>
       <div>perfecto Admin</div>
       <Link type="button" className="btn btn-outline-primary me-md-2" to="/RegistroProductores">Registro de productor</Link>
      </>
   
    
  )
}

