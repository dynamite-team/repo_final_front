import React from 'react'
import { Link } from 'react-router-dom'
import NavBarBack from '../../components/NavBarBack'
export default function Admi() {

  return (
    <>
      <NavBarBack
        color="navbar navbar-expand-lg bg-primary"
        colorIcon="white" />
      <div>perfecto Admin</div>
      <Link type="button" className="btn btn-outline-primary me-md-2" to="/RegistroProductores">Registro de productor</Link>
    </>


  )
}

