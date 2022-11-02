import { Carousel } from '@trendyol-js/react-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


const Carrusel = ({contenido}) => {
    return(
        <>
       
         <Carousel show={3.5} slide={2} transition={0.5} responsive={true} 
         leftArrow={<IoIosArrowBack size={30} style={{'marginTop':'300%'}}/>}
         rightArrow={<IoIosArrowForward size={30} style={{'marginTop':'300%'}}/>} >
           <div style={{"backgroundColor" : "red", "width": "200px", "height": "200px"}}>{contenido}</div>
            </Carousel>
        </>
    )
}

export default Carrusel;