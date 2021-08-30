import { Button } from "react-bootstrap";
import "./ItemCart.css"

const ItemCart = ( props ) => {

    const { film, cantidad, onDeleteEvent } = props;
    const { id,title,price,pictureUrl } = film;         

    const handleDeleteEvent = () => {
        onDeleteEvent(id,price,cantidad);
        }

    return(
        <div className='container cartContainer'>
            <div className='img'>
                <img src={pictureUrl} alt="film carrito"/>
            </div>
            <div className="filmData">
                <h4>{title}</h4>
                <p>Precio: {price}</p>
                <p>Cantidad: {cantidad}</p>
            </div>
            <div>
                <Button variant='danger' onClick={handleDeleteEvent}>X</Button>
            </div>
        </div>
    )
}

export default ItemCart;