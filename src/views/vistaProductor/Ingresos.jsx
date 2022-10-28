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

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
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
        <Wrapper>
          <PaginatedItems itemsPerPage={5} />
        </Wrapper>
      </ContainerPrincipal>
    </>
  )
}

export default IngresosMensualesView;