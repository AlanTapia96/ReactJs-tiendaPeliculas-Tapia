import { Button } from 'react-bootstrap';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemCartList from './ItemCartList/ItemCartList';
import './CartContainer.css'

const CartContainer = () => {

    const { productsCart, totalPrice, removeItem } = useContext(CartContext);

    const onDeleteEvent = (id,price,cantidad) => {
        removeItem(id,price,cantidad);
    }

    return(
        <>
            {productsCart.length === 0 && 
            <div className="container cartEmpty">
                <h3>No ha agregado ninguna película al carrito aún</h3>
                <Link to={'/'}>
                    <Button variant="primary">Seguir comprando</Button>
                </Link>
            </div>
            }

            {productsCart.length !== 0 && <>
            <ItemCartList className="container" films={productsCart} onDelete={onDeleteEvent} />
            <div className="totalMount container"> 
                <h4>Monto total: {totalPrice}</h4>
            </div>
            </>
            }

        </>)
}

export default CartContainer;