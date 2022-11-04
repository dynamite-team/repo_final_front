import Card from 'react-bootstrap/Card';
import { Image, Transformation } from "cloudinary-react";

const CardProductoCat = (props) => {
    return (
        <Card style={{ 'width': '200px','height':'300px' ,'box-shadow': 'rgba(0, 0, 0, 0.09) 0px 3px 12px'}}>
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