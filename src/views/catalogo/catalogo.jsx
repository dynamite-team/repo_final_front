import { useState } from 'react';
import styled from 'styled-components';
import { GiFruitBowl, GiMeat, GiMilkCarton, GiPaperBagOpen, GiWrappedSweet } from "react-icons/gi";
import { useEffect } from 'react';
import NavBarBack from '../../components/NavBarBack';



const Container = styled.div`
    background-color: white;
    padding: 10px;
    text-align: center;
    margin: 35px 35px 35px 35px;
`;
const Title = styled.h1`
  text-align: center;
  color: blue;
  font-family: Monserrat;
  padding: 20px;
  font-size: 40px;
  @media screen and (max-width: 900px){
    font-size: 30px;
    text-align: center;
  }
`;
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #DCDFDF;
  border-size: 50px; 
  border-radius: 3px;
  ::placeholder {
    color: #858585;
  }
  width: 100vh;
  @media screen and (max-width: 900px){
    width:80vh
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  background-color: #9ADFFE;
  border-radius : 20px;
  height: 21vh;

  @media screen and (min-width: 1000px){
    display: flex;
    justify-content: center;
    padding: .1rem;
    background-color: #9ADFFD;
    border-radius : 10px;
    height: 18vh;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  background-color: #9ADFFE;
  border-radius : 20px;
  height: 100px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 15px;
  position:relative;
`;
const GridProductos = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;

  @media screen and (max-width: 900px){
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
  }
`;
const Span = styled.div`
position:absolute;
bottom:0;
font-family: Monserrat;
font-weight: bold;
;
`

const Catalogo = () => {
  //estado de la lista de todos los productos
  const [productos, setProductos] = useState([]);
  //estado de los filtros
  const [filtrado, setFiltrado] = useState([]);
  //estado de la categoria
  const [categoria, setCategoria] = useState("");
  //estado del input
  const [search, setSearch] = useState("");


  const showData = () => {
    fetch("http://localhost:3000/carrito")
      .then(response => response.json())
      .then(data => {
        setProductos(data);
      });
  }

  //Función que guarda el valor de lo que se escribe en el input
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    showData();
  }, [])

  //cada vez que se realiza una modificacion de eleccion de categoria
  //se filtran los productos
  useEffect(() => {
    setFiltrado(productos.filter((element) => element.categoria === categoria))
  }, [categoria])

  //Se filtran los productos cada vez que se modifica el estado del buscador
  useEffect(() => {
    if (!search) {
      setFiltrado(productos)
    } else {
      setFiltrado(productos.filter((dato) =>
        dato.producto.toLowerCase().includes(search.toLocaleLowerCase())))
    }
    console.log(filtrado)

  }, [search])

  return (
    <>
    <NavBarBack 
        color="navbar navbar-expand-lg bg-primary"
        colorIcon= "white"/> 
      <Container>
        <Title>Encuentra los productos que buscas</Title>
        <Container>
          <Grid>
            <Button type="button" onClick={() => setCategoria("Lacteos")}>
              <GiMilkCarton size={50} color={"white"} />
              <Span>Lacteos</Span>
            </Button>

            <Button type="button" onClick={() => setCategoria("Carnes")}>
              <GiMeat size={50} color={"white"} />
              <Span>Carnes</Span>
            </Button>

            <Button type="button" onClick={() => setCategoria("Frutas/Verduras")}>
              <GiFruitBowl size={50} color={"white"} />
              <Span>Frutas/Verduras</Span>
            </Button>

            <Button type="button" onClick={() => setCategoria("Bolsones")}>
              <GiPaperBagOpen size={50} color={"white"} />
              <Span>Bolsones</Span>
            </Button>

            <Button type="button" onClick={() => setCategoria("Dulces artesanales")}>
              <GiWrappedSweet size={50} color={"white"} />
              <Span>Dulces artesanales</Span>
            </Button>
          </Grid>
        </Container>

        <Input onChange={searcher} placeholder='Buscar Productos'></Input>



        <GridProductos>
          {
            //Filtra por categoria
            categoria !== ""
              ? filtrado
                .map((producto) => (
                  <tr key={producto.id}>
                    <Item type="button">{producto.producto}</Item>
                  </tr>
                ))

              //filtra por input
              : filtrado
                .map((producto) => (
                  <tr key={producto.id}>
                    <Item type="button">{producto.producto}</Item>
                  </tr>
                ))
          }
        </GridProductos>

      </Container>
    </>


  )
}

export default Catalogo;