import Card from 'react-bootstrap/Card';
import { Image, Transformation } from "cloudinary-react";

const CardProductoCat = (props) => {
    return (
        <Card style={{ 'width': '200px','height':'300px' ,
        'boxShadow': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', 'borderRadius':'15px',
        'borderColor':'#D4D4D4'}}>
         <Image cloudName="dawjd5cx8" publicId={props.img}>
            <Transformation
                height="700"
                width="700"
                aspectRatio="1"
                crop="fill"
            />
         </Image>
          <Card.Body>
            <Card.Title>{props.nombre}</Card.Title>
            <Card.Text style={{"color": "green"}}>
              ${props.precio}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default CardProductoCat;