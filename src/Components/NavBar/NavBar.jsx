import './NavBar.css'
import BuyButton from "../Buttons/Button";
import CartWidget from './CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink,Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                        <div>
                            <CartWidget />
                            <Link to='/' className="link-img">PelisJs</Link>
                        </div>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-links">
                            <NavLink exact to='/' activeClassName='active'>Inicio</NavLink>
                            <NavLink exact to='/categories' activeClassName='active'>Categorías</NavLink>
                            <NavLink exact to='/contact' activeClassName='active'>Contactanos</NavLink>
                            <BuyButton variant="light" size="sm"></BuyButton>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>        
    )
}

export default NavBar