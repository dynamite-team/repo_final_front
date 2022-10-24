import React from 'react'
import styled from 'styled-components'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ReactPlayer from 'react-player';




const Container = styled.div`
width: fit-content;
height: fit-content;


`;
const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: black;
  font-family: concert one;
  padding: 20px;
 

`;

const Title2 = styled.h3`
  color: black;
  margin-left: 60px;
  margin-bottom: 0px;
  font-size: 30px;
  font-family: Montserrat;
  font-weight: bold;
`;
const Parrafo = styled.p`
  text-align: justify;
  font-family: Montserrat;
  text-indent: 10px;
  margin-left: 50px;
  margin-right: 30px; 
  font-size: 20px;
  padding-bottom: 10%;
  
`;
const Left = styled.div`
padding: 40px
width: 50%;
height: 50vh
`;
const Right = styled.div`
width: 50%;
height: 50vh;
padding: 20px
`;

const Preguntas = styled.div`
width: 90vh;
height: fit-content;
padding: 35px;
background-color:  #9BB955;
border-radius: 20px;
`;

const Wrapper2 = styled.div`
height: 50%;
display: flex;
`;

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 50px 50px;
grid-gap: 5px;
margin-top:5%;

`



export default function Info() {

  return (
    <>
      <Container >

        <Wrapper2>
        <Left>
          <Title>Soberania Alimentaria Formoseña</Title>
          <Title2>¿Qué es?</Title2>
          <Parrafo>
            En Formosa, el Gobierno provincial lanzó un nuevo programa que beneficia a la economía de las familias y a los pequeños
            productores conocidos como paipperos (forman parte del PAIPPA).
              <br/>
              <br/>
            <strong>Soberanía Alimentaria Formoseña</strong> es un programa que ofrece alimentos directamente del productor al consumidor, es decir,
              sin que existan intermediarios y agregados de valor entre la comercialización y las familias.
          </Parrafo>
          
          
          
        </Left>
        <Right>
          <img src="https://scontent.fcor3-1.fna.fbcdn.net/v/t1.6435-9/153659362_3027439987472109_1776575738075615055_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=aq1ZhTabXkIAX_BfT2s&_nc_oc=AQmXKJ0pHAwXd9WR5v9tJPCCb0CRhzsCwwZnCXR6SI9lgjyatkFquxm5QoRjh8ieB2o&_nc_ht=scontent.fcor3-1.fna&oh=00_AT-yVQl5iCh1zln-O7zC6bJWD8Qauwj6q3x1lOgJeXWDcA&oe=6361D58C"
           style={{height: "320px", width:"320px", borderRadius: "30px", marginLeft: "0px"}}/>
        </Right>
        </Wrapper2>
       
       

        <Wrapper>
          <Left>
         
          <ReactPlayer
            url='https://www.facebook.com/watch/?v=464114538160131'
            playing
            width='100%'
            height='100%'
            style={{ marginLeft: '40px', marginBottom: '80px'}}/>
            
        
        
            <Parrafo>
              De esta forma, los formoseños puede acceder
              a una gran variedad de alimentos de producción local a precios referenciados. Desde frutas, verduras, hortalizas, carnes,
              productos lácteos y artesanales de los distintos consorcios adheridos al programa.
                <br/>
                <br/>
              Con esto se buscar impulsar a la producción y consumo local, mejorar la nutrición, la seguridad alimentaria y ayudar al bolsillo
              de las familias <strong>llevando a los stands productos de calidad garantizada. </strong>
              Mediante cronogramas el programa recorrerá todas las jurisdicciones de la provincia de Formosa para asegurarse de llegar a los
              lugares en donde se dan las mayores asimetrías en costos de producción y los precios que pagan los consumidores finales.
            </Parrafo>
                
          </Left>

          <Right>
            <Preguntas>
              <Title>Preguntas Frecuentes</Title>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography>Soy productor, ¿Cómo me puedo unir al programa?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br></br>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel2a-content"
                  id="panel2a-header">
                  <Typography>¿Cómo es la calidad de los productos?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br></br>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel2a-content"
                  id="panel2a-header">
                  <Typography>¿Cómo sé cuando y en qué lugar se realizarán las ventas?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br></br>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel2a-content"
                  id="panel2a-header">
                  <Typography>¿Qué métodos de pago ofrecen?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Preguntas>
          </Right>

        </Wrapper>
     
      </Container>

    </>
  )
}

