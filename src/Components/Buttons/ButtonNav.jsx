import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ButtonNav = () => {
    return(
        <button type="button" className="nav-button btn btn-secondary">
            <FontAwesomeIcon icon={faShoppingCart}/>
        </button>
    )
}

export default ButtonNav