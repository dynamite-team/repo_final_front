
import '../../styles/cardCarrusel.css';

const ItemCategories = (props) => {
    return (
        <>
            <div className="slider" key={props.uid}>
                <div className="slide-track">
                    <div className="slide">
                        <div>{props.nombre}</div>
                      
                    </div>
                </div>
            </div>
        </>

    )
}

export default ItemCategories;