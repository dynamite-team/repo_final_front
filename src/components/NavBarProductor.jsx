import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
/* import { useNavigate } from 'react-router-dom'

const navigate = useNavigate(); */
import { Link } from 'react-router-dom';


function NavBarProductor(props) {
  return (
    <Navbar bg={props.color} variant="dark">
    <Container>
    <Link to={-1} color="red">  </Link>
    </Container>
  </Navbar>
  );
}

export default NavBarProductor;