import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import styles from "./ButtonNav.module.css"

const ButtonNav = () => {

    const { productsCart } = useContext(CartContext);
    
    return(
        <div className={styles.buttonContainer}>
            <button type="button" className="nav-button btn btn-secondary">
                <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
            <div className={productsCart.length === 0? styles.empty : styles.notEmpty}>
                <p className={styles.buttonCant}>{productsCart.length}</p>
            </div>
        </div>
    )
}

export default ButtonNav