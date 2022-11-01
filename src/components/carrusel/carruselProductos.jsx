import { Carousel } from '@trendyol-js/react-carousel';


const Carrusel = () => {
    return(
        <>
       
         <Carousel show={3.5} slide={2} transition={0.5} responsive="true" >
            <div style={{"backgroundColor" : "red", "width": "200px", "height": "200px"}}>Hola2</div>
            <div style={{"backgroundColor" : "red", "width": "200px", "height": "200px"}}>Hola1</div>
            <div style={{"backgroundColor" : "red", "width": "200px", "height": "200px"}}>Hola1</div>
            <div style={{"backgroundColor" : "red", "width": "200px", "height": "200px"}}>Hola1</div>
            <div style={{"backgroundColor" : "red", "width": "200px", "height": "200px"}}>Hola1</div>
            <div style={{"backgroundColor" : "red", "width": "200px", "height": "200px"}}>Hola1</div>
            </Carousel>
        </>
    )
}

export default Carrusel;