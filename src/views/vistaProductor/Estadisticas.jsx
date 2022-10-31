import BarChart from "../../components/graficos/BarGrap";
import NavBarBack from "../../components/navbars/NavBarBack";
import styled from 'styled-components';

const ContainerGrafico = styled.div`
    align-items: stretch;
    display: row;
    margin:  2%  20%  2%  20%;
`;
const Title = styled.div`
    font-size: 40px;
    font-family: Cambria;
    text-align: left;
    margin-left: 5%;
    margin-top: 2%
`;

const EstadisticasView = () => {
    return (
        <>
            <NavBarBack
                color="navbar navbar-expand-lg bg-primary"
                colorIcon="white" />
            <Title>Estadísticas de sus ventas</Title>
            <ContainerGrafico>
                <BarChart />
            </ContainerGrafico>

        </>
    )
}

export default EstadisticasView;