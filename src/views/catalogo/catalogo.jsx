import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Transformation, Image } from 'cloudinary-react';
/* {----Componentes----} */
import NavBarBack from '../../components/navbars/NavBarBack';
import CardProductoCat from '../../components/cards/cardProdCatalogo';
import CarruselPublicidad from '../../components/carruselPubli';
import SpinnerCarga from '../../components/spinners/spinnerCargaProd';
import ModalUbi from '../../components/modals/modal.ubi';

const Container = styled.div`
    background-color: white;
    padding: 10px;
    text-align: center;
    margin: 35px 35px 35px 35px;
`;
const Title = styled.h1`
  text-align: center;
  color: blue;
  font-family: Cambria;
  padding: 20px;
  font-size: 40px;
  @media screen and (max-width: 900px){
    font-size: 30px;
    text-align: center;
  }
`;
const Input = styled.input`
  font-size: 18px;
  font-family: Cambria;
  padding: 10px;
  margin: 1% 2% 1% 2%;
  background: #F5F5F5;
  border-radius: 20px;
  border-color: #B1B1B1;
  width: 100vh;
  height: 50px;
  outline: none;
  :placeholder {
    color: #666666 ;
  }
  :focus{
    border-color: #A5A2A2 ;
  }
`;
const GridProductos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  margin:  35px 35px 35px 35px
`;
const ContainerCarrusel = styled.div`
  width: 100%;
  margin: 1% 2% 1% 2%
`;
const ItemCategorias = styled.div`
  width: 200px;
  height: 200px;
  background-color: #b9de51;
  border-radius: 20px;
  margin: auto;
`;
const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background-color: #64BD50;
  font-family: Cambria;
  font-weight: bold;
  color: white;
  border-color: #B1B1B1 ;
`;
const Label = styled.label`
  display: block;
  margin-top: 15%; 
  color: white;
  font-weight: bold;
  font-family: Cambria
`;

const Catalogo = () => {
  //estado de la lista de todos los productos
  const [productos, setProductos] = useState([]);
  //estado de los filtros
  const [filtrado, setFiltrado] = useState([]);
  //estado de la categoria
  const [categoria, setCategoria] = useState("");
  //estado del input
  const [search, setSearch] = useState("");
  //estado de la data de categorias (fetch a la api)
  const [dataCategorias, setDataCategorias] = useState([]);
  //estado de la carga de peticiones
  const [loading, setLoading] = useState(true);
  //estado para la primera vez que se renderizan los productos en el catalogo
  const [primeraVez, setPrimeraVez] = useState(true);
  //estado de puntos de ubicacion
  const [puntos, setPuntos] = useState([]);
  //estado de los valores del select de ubicaciones
  const [valorSelect, setValorSelect] = useState(null)


  //Llamada a la api 
  const showData = () => {

    fetch('https://node-saf-api.onrender.com/api/v1/puntos')
      .then(response => response.json())
      .then(data => {
        setPuntos(data.puntos)
      })

    fetch('https://node-saf-api.onrender.com/api/v1/categorias?desde=0&limite=100')
      .then(response => response.json())
      .then(data => {
        setDataCategorias(data.categorias)
      })
  }

  //Cada vez que el select de ubicacion se modifique se va a llamar a la api con el punto elegido
  useEffect(() => {
    fetch(`https://node-saf-api.onrender.com/api/v1/productos?desde=0&limite=100&punto=${valorSelect}`)
      .then(response => response.json())
      .then(data => {
        setProductos(data.productos);
        console.log("productos de esta ruta", productos)
        setLoading(false)
      })
  }, [valorSelect])


  //Hace las consultas a las apis cuando se renderiza 
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
  }, [search])

  //Items de carrusel de categorias
  const items = dataCategorias.map((item) => {
    return <ItemCategorias key={item.uid} type='button' onClick={() => {
      setCategoria(item.nombre)
      setPrimeraVez(false)
    }}>
      <Image cloudName="dawjd5cx8" publicId={item.img} style={{ "marginTop": "10%" }}>
        <Transformation
          height="100"
          width="100"
          aspectRatio="1"
          crop="fill"
        />
      </Image>
      <Label>
        {item.nombre}
      </Label>
    </ItemCategorias>
  })
  //Carrusel responsive
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4.5 },
  };



  return (
    <>
      <NavBarBack
        color="navbar navbar-expand-lg bg-primary"
        colorIcon="white" />
      <Container>

        {/* {-----------------CARRUSEL PUBLICIDAD-----------------} */}
        <ContainerCarrusel>
          <CarruselPublicidad />
        </ContainerCarrusel>

        {/* {---------------CARRUSEL CATEGORIAS-----------------} */}
        <Title>Encuentra los productos que buscas</Title>
        <Container>
          <AliceCarousel
            style={{ "margin": "35px 35px 35px 35px" }}
            mouseTracking
            items={items}
            responsive={responsive}
            disableButtonsControls
          />
        </Container>


        <ModalUbi 
          puntos={puntos}
          setValorSelect={setValorSelect}
        />
        <Input onChange={searcher} placeholder='Buscar Productos'></Input>
        <Button onClick={() => setPrimeraVez(true)}>Ver todos</Button>

        {/* {-----------GRID DE PRODUCTOS-------------} */}

        {
          valorSelect ?
            <>
              {
                loading ? <SpinnerCarga />
                  :
                  <>
                    <GridProductos>
                      {
                        primeraVez ? productos.map((producto) => (
                          <CardProductoCat
                            {...producto} />
                        ))
                          :
                          <>
                            {
                              //Si filtrado no tiene nada me muestra todos los productos 
                              filtrado == "" ?
                                <div>No se han encontrado productos en esta categoria</div>
                                :
                                <>
                                  {
                                    //Filtra por categoria
                                    categoria !== ""
                                      ? filtrado
                                        .map((producto) => (
                                          <CardProductoCat
                                            {...producto} />
                                        ))
                                      //filtra por input
                                      : filtrado
                                        .map((producto) => (
                                          <CardProductoCat
                                            {...producto} />
                                        ))
                                  }
                                </>
                            }
                          </>
                      }
                    </GridProductos>
                  </>
              }
            </>

            :
            <div style={{ "fontFamily": "Cambria", "fontSize": "20px", "marginTop": "1%" }}>
              ¡Seleccione un lugar para ver la disponibilidad de productos!
            </div>
        }

      </Container>
    </>
  )
}

export default Catalogo;