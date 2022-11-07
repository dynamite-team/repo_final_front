import HeroSlider, { Slide } from "hero-slider"
import imagen2 from '../../assets/banner-menu.png'
import imagen3 from '../../assets/banner-promocions.png'
import imagen4 from '../../assets/banner-ubicacion.png'

const Carrusel = () => {
    return (
        <HeroSlider
            height={"50vh"}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 200,
                slidingDelay: 50,
            }}
        >
            <Slide
                background={{
                    backgroundImageSrc: imagen2
                }} 
            />
            <Slide
                background={{
                    backgroundImageSrc: imagen3
                }} 
            />
            <Slide
                background={{
                    backgroundImageSrc: imagen4
                }} 
            />

        </HeroSlider>
    )
}

export default Carrusel

