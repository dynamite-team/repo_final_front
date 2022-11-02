import Card from 'react-bootstrap/Card';

const CardProducto = ({nombre, imagen}) => {
    return (
        <Card style={{ width: '250px' }}>
          <Card.Img style={{"width": "200px", "height": "200px"}} variant="top" src={imagen} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              {nombre}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default CardProducto;