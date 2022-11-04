import { Carousel } from '@trendyol-js/react-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Carrusel = (props) => {
    return (
        <>
            <Carousel show={3.5} slide={2} transition={0.5}
            leftArrow={<IoIosArrowBack size={30} style={{ 'marginTop': '300%' }} />}
            rightArrow={<IoIosArrowForward size={30} style={{ 'marginTop': '300%' }} />} >
            <div>{props.img}</div>
          </Carousel>
        </>

    );
}

export default Carrusel;
