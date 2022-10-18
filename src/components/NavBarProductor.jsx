import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBarProductor() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Inicio</Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default NavBarProductor;