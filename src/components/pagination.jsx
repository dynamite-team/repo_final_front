import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import styled from 'styled-components'


const Button = styled.button`
    border-radius: 5px;
`;

const Pagination = ({ nPaginas,currentPage,setCurrentPage  }) => {

    const pageNumbers = [ ...Array(nPaginas +1).keys()].slice(1)

    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
    return (

        <ReactPaginate
        previousLabel={<Button>Anterior</Button>}
        nextLabel={<Button>Siguiente</Button>}
        pageCount={pageNumbers}
        nextPageRel={nextPage}
        prevPageRel={prevPage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        />

    )

};

export default Pagination;