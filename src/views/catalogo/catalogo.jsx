import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import NavBarBack from '../../components/navbars/NavBarBack';
import { Carousel } from '@trendyol-js/react-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import CardProductoCat from '../../components/cards/cardProdCatalogo';
/* 
 */
import Carrusel from '../../components/carrusel/carousel';

const Container = styled.div`
    background-color: white;
    padding: 10px;
    text-align: center;
    margin: 15px 15px 15px 15px
`;
const Title = styled.h1`
  text-align: center;
  color: blue;
  font-family: Cambria;
  padding: 20px;
  font-size: 40px;
  margin-top:3%;
  margin-bottom:3%;
  @media screen and (max-width: 900px){
    font-size: 30px;
    text-align: center;
  }
`;
const Input = styled.input`
  font-size: 18px;
  font-family: Cambria;
  padding: 10px;
  margin-top: 3%;
  margin-bottom: 3%;
  background: #F5F5F5;
  border-radius: 20px;
  border-color: white;
  width: 100vh;
  outline: none;
  :placeholder {
    color: #666666 ;
  }
  :focus{
    border-color: #A5A2A2 ;
  }

  @media screen and (max-width: 900px){
    width:80vh
  }
`;
const ItemCategory = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  font-family: Cambria;
`;
const GridProductos = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  margin-top: 2%;

  @media screen and (max-width: 900px){
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
  }
`;
const ContainerCarrusel = styled.div`
  width: 100%;
  margin: auto

`;



const dataCategorias = [
  {
    id: 1,
    nombre: "CARNES",
    color: "red"
  },
  {
    id: 2,
    nombre: "FRUTAS Y VERDURAS",
    color: "pink"
  },
  {
    id: 3,
    nombre: "LÁCTEOS",
    color: "purple"
  },
  {
    id: 4,
    nombre: "BOLSONES",
    color: "green"
  },
  {
    id: 5,
    nombre: "DULCES ARTESANALES",
    color: "blue"
  }
]

/* const ArrayImagenes = [
  {
    id: 1,
    img: `${imagen2}`
  },
  {
    id: 2,
    img: `${imagen3}`
  },
  {
    id: 3,
    img: `${imagen4}`
  }
]
 */
const Catalogo = () => {
  //estado de la lista de todos los productos
  const [productos, setProductos] = useState([]);
  //estado de los filtros
  const [filtrado, setFiltrado] = useState([]);
  //estado de la categoria
  const [categoria, setCategoria] = useState("");
  //estado del input
  const [search, setSearch] = useState("");

  //Llamada a la api 
  const showData = () => {
    fetch("https://node-saf-api.onrender.com/api/v1/productos")
      .then(response => response.json())
      .then(data => {
        setProductos(data.productos);
      });
  }

  useEffect(() => {
    showData();
  }, [])

  //cada vez que se realiza una modificacion de eleccion de categoria
  //se filtran los productos
  useEffect(() => {
    setFiltrado(productos.filter((element) => element.categoria.nombre === categoria))
  }, [categoria])

  //Función que guarda el valor de lo que se escribe en el input
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //Se filtran los productos cada vez que se modifica el estado del buscador
  useEffect(() => {
    if (!search) {
      setFiltrado(productos)
    } else {
      setFiltrado(productos.filter(producto =>
        producto.nombre.includes(search.toUpperCase())))
    }
    console.log(filtrado)
  }, [search])

  return (
    <>
      <NavBarBack
        color="navbar navbar-expand-lg bg-primary"
        colorIcon="white" />
      <Container>
        <ContainerCarrusel>
         {/*  <Carousel show={1} autoSwipe={true}  responsive={true} >
            {
              ArrayImagenes.map((item) => (
                <ItemCarrusel key={item.id}>
                  <img src={item.img} style={{ 'objectFit': 'cover', 'width': '100%', 'height':'200px', 'imageRendering':'pixelated'}} />
                </ItemCarrusel>
              ))
            }
          </Carousel> */}

          <Carrusel/>
        </ContainerCarrusel> 

  
        <Title>Encuentra los productos que buscas</Title>
        <ContainerCarrusel>
          <Carousel show={4.5} slide={2} transition={0.5} responsive={true}
            leftArrow={<IoIosArrowBack size={30} style={{ 'marginTop': '200%' }} />}
            rightArrow={<IoIosArrowForward size={30} style={{ 'marginTop': '200%' }} />} >
            {
              dataCategorias.map((item) => (
                <ItemCategory key={item.id} style={{ "backgroundColor": `${item.color}` }}
                  onClick={() => setCategoria(item.nombre)}>
                  <div style={{"margin": "auto"}}>{item.nombre}</div>
                  <div>ICON</div>
                </ItemCategory>
              ))
            }
          </Carousel>
        </ContainerCarrusel>

        <Input onChange={searcher} placeholder='Buscar Productos'></Input>
          

        <GridProductos>
          {
            //Filtra por categoria
            categoria !== ""
              ? filtrado
                .map((producto) => (
                  <tr key={producto._id}>
                    <CardProductoCat
                      {...producto} />
                  </tr>
                ))
              //filtra por input
              : filtrado
                .map((producto) => (
                  <tr key={producto._id}>
                    <CardProductoCat
                      {...producto} />
                  </tr>
                ))
          }

        </GridProductos>
      </Container>
    </>


  )
}

export default Catalogo;