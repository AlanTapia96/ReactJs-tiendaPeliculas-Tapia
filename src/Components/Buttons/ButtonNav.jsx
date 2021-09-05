import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import "./ButtonNav.css"

const ButtonNav = () => {

    const { productsCart } = useContext(CartContext);
    console.log(productsCart);
    return(
        <div className="buttonContainer">
            <button type="button" className="nav-button btn btn-secondary">
                <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
            <div className={productsCart.length === 0? "empty" : "notEmpty"}>
                <p className="buttonCant">{productsCart.length}</p>
            </div>
        </div>
    )
}

export default ButtonNav