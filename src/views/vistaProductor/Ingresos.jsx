import styled from 'styled-components';
import CardIngresos from '../../components/cards/cardIngresos';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import NavBarBack from '../../components/navbars/NavBarBack';

import '../../styles/pagination.styles.css'

const ContainerPrincipal = styled.div`
    height: 100vh;
    width: 100vw;
`;
const Title = styled.div`
    font-size: 40px;
    font-family: Cambria;
    text-align: left;
    margin-left: 5%;
    margin-top: 2%
`;
const Wrapper = styled.div`
    align-items: stretch;
    display: row;
    margin:  2%  5%  5%  5%;
`
const Button = styled.button`
   border-radius: 5px
`;
const Footer = styled.div`
   text-align: center;
   align-self: flex-end;
   margin: 1% 10% 1% 10%
`;


const items = [
  {
    mes: "Enero",
    monto: "$400"
  },
  {
    mes: "Febrero",
    monto: "$400"
  },
  {
    mes: "Marzo",
    monto: "$400"
  },
  {
    mes: "Abril",
    monto: "$400"
  },
  {
    mes: "Mayo",
    monto: "$400"
  },
  {
    mes: "Junio",
    monto: "$400"
  },
  {
    mes: "Julio",
    monto: "$400"
  },
  {
    mes: "Agosto",
    monto: "$400"
  },
  {
    mes: "Septiembre",
    monto: "$400"
  },
  {
    mes: "Octubre",
    monto: "$400"
  },
  {
    mes: "Noviembre",
    monto: "$400"
  },
  {
    mes: "Diciembre",
    monto: "$400"
  }
]

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <CardIngresos
            mes={item.mes}
            monto={item.monto} />
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {

  //Items de la pagina 
  const [currentItems, setCurrentItems] = useState(null);
  //cantidad de numeros de paginas
  const [pageCount, setPageCount] = useState(0);
  //saltos de cantidad de items que se da al ir a otra pagina
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    //Se le pasan los datos que deben aparecer al inicio de la pagina y al final
    setCurrentItems(items.slice(itemOffset, endOffset));
    //divide la longitud de los datos por la cantidad especificada de items por pagina
    //para sacar el total de paginas que deben haber
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
 
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Wrapper>
        <Items currentItems={currentItems} />
      </Wrapper>

      <Footer>
        <ReactPaginate
          previousLabel={<Button>Anterior</Button>}
          nextLabel={<Button>Siguiente</Button>}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </Footer>
    </>
  );
}
const IngresosMensualesView = () => {
  return (
    <>
      <NavBarBack
        color="navbar navbar-expand-lg bg-primary"
        colorIcon="white" />
      <ContainerPrincipal>
        <Title>Mis Ingresos</Title>
        <PaginatedItems itemsPerPage={5} />
      </ContainerPrincipal>
    </>
  )
}

export default IngresosMensualesView;