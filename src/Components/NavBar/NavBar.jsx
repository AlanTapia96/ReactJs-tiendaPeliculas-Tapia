import styles from './NavBar.module.css'
import BuyButton from "../Buttons/ButtonNav";
import CartWidget from './CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Categories from '../Categories/Categories'
import { NavLink,Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navBar">
                <Container>
                        <div>
                            <CartWidget />
                            <Link to='/' className={styles['link-img']}>PelisJs</Link>
                        </div>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={`ms-auto ${styles['nav-links']}`}>
                            <NavLink exact to='/' activeClassName={styles.active}>Inicio</NavLink>
                            <Categories className={styles.categories}/>
                            <NavLink exact to='/cart'><BuyButton variant="light" size="sm"></BuyButton></NavLink>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>        
    )
}

export default NavBar