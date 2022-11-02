import { ProSidebarProvider, Menu, MenuItem } from 'react-pro-sidebar'
import styled from 'styled-components';
import NavBarBack from '../../components/navbars/NavBarBack';

/* ----Iconos----- */
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsCashCoin, BsBagCheck, BsGraphUp } from 'react-icons/bs'


const Wrapper = styled.div`
display: flex;
`
const Left = styled.div`
width: 25%;
height: 100vh;
background-color: #E2F0FB 
`;
const Right = styled.div`
height: fit-content;
width: 70%
`;
const ContainerOptions = styled.div`
background-color: white;
padding: 10px;
text-align: left;
`;

const persona = {
    nombre: "Milagros Serrano",
    DNI: "44576947",
    telefono: "3794-642774",
    email: "miliserrrano@gmail.com",
    domicilio: "calle falsa 123",
}

const HomeProductor = () => {

    return (
        <>
            <NavBarBack
                color="navbar navbar-expand-lg bg-primary"
                colorIcon="white" />
            <Wrapper>
                <Left>
                    <ProSidebarProvider>
                        <h5 style={{ marginLeft: '30px', fontFamily: 'Cambria', marginTop: '5%' }}>SOBERANIA ALIMENTARIA FORMOSEÑA</h5>
                        <Menu style={{ width: '50vh' }}>
                            <div style={{ marginLeft: '30px', color: 'grey' }}>
                                <div>{persona.nombre}</div>
                                <div>{persona.DNI}</div>
                                <div>{persona.telefono}</div>
                                <div>{persona.email}</div>
                                <div>{persona.domicilio}</div>
                            </div>
                            <hr />
                            <MenuItem icon={<AiOutlineInfoCircle />} href="/Informacion">Acerca del programa</MenuItem>
                            <MenuItem icon={<FiLogOut />}>CERRAR SESION</MenuItem>
                        </Menu>
                    </ProSidebarProvider>
                </Left>
                <Right>
                    <ProSidebarProvider>
                        <ContainerOptions>
                            <Menu>
                                <MenuItem icon={<BsGraphUp/>} href="/MisEstadisticas">Mis estadísticas</MenuItem>
                                <MenuItem icon={<BsCashCoin/>} href="/IngresosMensuales">Mis ingresos mensuales</MenuItem>
                                <MenuItem icon={<BsBagCheck/>} href="/MisProductos">Mis productos</MenuItem>
                            </Menu>
                        </ContainerOptions>
                    </ProSidebarProvider>
                </Right>
            </Wrapper>
        </>
    )
}

export default HomeProductor;