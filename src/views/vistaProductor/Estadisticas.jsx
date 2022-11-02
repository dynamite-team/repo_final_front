import BarChart from "../../components/graficos/BarGrap";
import NavBarBack from "../../components/navbars/NavBarBack";
import styled from 'styled-components';
import { useState, useEffect } from "react";


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

    useEffect(() => {
        getData();
    }, [])

    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])

    const getData = async () => {

        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await response.json();
        length = data.data.length;

        let labelss = [];
        let valuess = [];
        let i
        for (i = 0; i < length; i++) {
            labelss.push(data.data[i].Year);
            valuess.push(data.data[i].Population);
        }
        setLabels(labelss);
        setValues(valuess)

console.log("l",labels)
console.log("v",values)
       
    }

 
    return (
        <>
            <NavBarBack
                color="navbar navbar-expand-lg bg-primary"
                colorIcon="white" />
            <Title>Estadísticas de sus ventas</Title>
            <ContainerGrafico>
                <BarChart datosValues={values}
                datosLabels={labels} />
            </ContainerGrafico>

        </>
    )
}

export default EstadisticasView;