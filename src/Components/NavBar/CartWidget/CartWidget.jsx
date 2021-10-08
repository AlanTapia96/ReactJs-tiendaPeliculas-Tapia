import imgNavbar from "../../../assets/img-navbar.png"
import styles from '../NavBar.module.css'

const CartWidget = () => {
    return(
        <>
            <img src={imgNavbar} alt="img-film" className={styles['nav-img']}/>
        </>
    )
}

export default CartWidget