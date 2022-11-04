import React from 'react'
import Nav from "../../components/navbars/Nav";
import "../../styles/Stylehome.css";
import styled from "styled-components";
import { } from "module";


/* COMIENZO STYLED COMPONENTS */
const Inicio = styled.div`
background-color:rgba(88.00000235438347, 116.00000068545341, 231.00000143051147, 1);
position: absolute;
left: 0px;
 width:100%;
 height:587px
`;
const Imgestrella = styled.img`
width:40%;
height:500px;
  position: relative;
  top: 40px;
 left: 10px;
`;
const Footer = styled.div`
width:57px;
height:316px;
position:absolute;
  width:1120px;
  height:587px;
top:1500px;
overflow-x: hidden;
`;
const Iconcards = styled.div`
position: relative;

max-width: 280px;
max-height: 280px;
color: white;
perspective: 1000px;
transform-origin: center;
top: 400px;
left: 420px;
`;
const Cardscontent = styled.div`
position: absolute;
width: 100%;
height: 100%;
transform-origin: center;
transform-style: preserve-3d;
transform: translateZ(-30vw) rotateY(0);
animation: carousel 10s infinite cubic-bezier(0.90, 0, 0.175, 1) forwards;
`;
const Left = styled.div`
padding: 40px
width: 50%;
height: 50vh
`;
const Wrapper2 = styled.div`
height: 50%;
display: flex;
`;

/* FINAL STYLED COMPONENTS */

export default function Home() {
  return (
    <>
      <Nav />


      {/*INICIO DEL HOME  */}

      <div className="container">
        <Inicio>
          <Imgestrella src="src\assets\img\estrella.png" id='estrella' alt="" />

          <div class="wrapper">
            <div class="static-txt"><b>Soberania Alimentaria Formoseña</b></div>

            <ul class="dynamic-txts">
              <li><span>
                Calidad
                <i class="fas fa-smile-beam"></i>
              </span></li>
              <li><span>Precios justos

                <i class="fas fa-comments-dollar"></i>
              </span></li>
              <li><span>
                Variedad
                <i class="fas fa-store"></i>
              </span></li>
              <li><span>Producción local
                <i class="fas fa-seedling"></i>
              </span></li>
            </ul>

          </div>
        </Inicio>
      </div>


      {/* PARTE DEL MEDIO DEL HOME*/}


      <div className='container' style={{ 'textAlign:': "center" }} >
        <Wrapper2>
          <Left>
            <div class="static-txt2" style={{ 'margin': 'auto' }}><b>Nuestros productos</b></div>
            <div class="static-txtsubtit" style={{ 'margin': 'auto' }}>
              El programa de soberania alimentaria formoseña pone en venta productos de produccion local.
              Brindamos a las personas la posibilidad de ver un catalogo con los productos que se ofrecen
            </div>
          </Left>

        </Wrapper2>
        <Iconcards >
              <Cardscontent>

                <div class="icon-cards__item d-flex align-items-center justify-content-center">
                  <span>
                    <h5 class="card-title" style={{ fontSize: '25px' }}><b> Carnes</b></h5>
                    <div class="iconscarne"></div>
                    <hr />
                    <h5 class="card-title" style={{ textAlign: 'center', fontSize: '25px' }}><b>Lacteos</b></h5>
                    <div class="iconslacteos"></div>
                  </span>

                </div>

                <div class="icon-cards__item d-flex align-items-center justify-content-center">
                  <span>
                    <h5 class="card-title" style={{ textAlign: 'center', fontSize: '25px' }}><b>Verduras y Frutas</b></h5>
                    <div class="iconsverdufrutas"></div>
                    <hr />
                    <h5 class="card-title" style={{ textAlign: 'center', fontSize: '25px' }}><b>Harinas y Legumbres</b></h5>
                    <div class="iconsharinalegum"></div>
                  </span>
                </div>

                <div class="icon-cards__item d-flex align-items-center justify-content-center">
                  <span>
                    <h5 class="card-title" style={{ textAlign: 'center', fontSize: '25px' }}><b>Bolsones Alimentarios</b></h5>
                    <div class="iconsbolsones"></div>
                    <hr />
                    <h5 class="card-title" style={{ textAlign: 'center', fontSize: '25px' }}><b>Dulces Artesanales</b></h5>
                    <div class="iconsdulces"></div>
                  </span>
                </div>
              </Cardscontent>
            </Iconcards>
      </div>



      {/* PARTE FINAL DEL HOME */}

      <div className='container' >

        <Footer >

          <footer className="d-flex  justify-content-between align-items-center py-3  border-top">
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-center mb-5 pb-1">Contacto</h5>

              <div class="form-outline form-white mb-4">
                <input type="text" id="formControlLg" class="form-control form-control-lg" placeholder='Deja tu email' /><br />
                <button type="button" class="btn btn-primary">Enviar</button>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="text" id="formControlLg" class="form-control form-control-lg" placeholder='Deja tu numero de celular ' /><br />
                <button type="button" class="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-md-0 ">
              <ul class="fa-ul" >
                <li className="nav-item">
                  <span class="fa-li"><i class="fas fa-home "></i></span><span class="ms-2 ">Formosa, moreno 1300, ARG</span>
                </li>
                <hr />
                <li className="nav-item">
                  <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">info@example.com</span>
                </li>
                <hr />
                <li className="nav-item">
                  <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+ 01 234 567 88</span>
                </li>
                <hr />
                <li className="nav-item">
                  <span class="fa-li"><i class="fas fa-print"></i></span><span class="ms-2">+ 01 234 567 89</span>
                </li>
                <hr />
              </ul>
            </div>
          </footer>

        </Footer>


      </div>

    </>
  )
}
