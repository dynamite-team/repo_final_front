import { ProSidebarProvider, Menu, MenuItem } from 'react-pro-sidebar'
import styled from 'styled-components';
import NavBarProductor from '../../components/NavBarProductor';
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Button = styled.div`
    padding: 4%;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const Wrapper = styled.div`
display: flex;
`
const Left = styled.div`
width: 30%;
height: 100vh;
background-color: #E2F0FB 
`;
const Right = styled.div`
height: fit-content;
width: 70%
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
            <NavBarProductor 
            color="primary"/>
            <Wrapper>
                <Left>
                    <ProSidebarProvider>
                        <h5 style={{ marginLeft: '30px', fontFamily: 'sans-serif', marginTop:'5%' }}>SOBERANIA ALIMENTARIA FORMOSEÑA</h5>
                        <Menu style={{ width: '50vh' }}>
                            <div style={{ marginLeft: '30px', color: 'grey' }}>
                                <div>{persona.nombre}</div>
                                <div>{persona.DNI}</div>
                                <div>{persona.telefono}</div>
                                <div>{persona.email}</div>
                                <div>{persona.domicilio}</div>
                            </div>
                            <MenuItem icon={<FiSettings />}>Modificar Datos</MenuItem>
                            <hr />
                            <MenuItem icon={<AiOutlineInfoCircle />} href="/Informacion">Acerca del programa</MenuItem>
                            <MenuItem icon={<FiLogOut />}>CERRAR SESION</MenuItem>
                        </Menu>
                    </ProSidebarProvider>
                </Left>
                <Right>
                        <Button type="button">Mis estadísticas</Button>
                        <Button type="button">Mis ingresos mensuales</Button>
                        <Button type="button">Mis productos</Button>
                        <Button type="button">Informacion de cuidado</Button>
                </Right>
            </Wrapper>
        </>
    )
}

export default HomeProductor;