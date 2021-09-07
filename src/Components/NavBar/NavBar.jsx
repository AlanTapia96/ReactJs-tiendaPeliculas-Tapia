import './NavBar.css'
import BuyButton from "../Buttons/ButtonNav";
import CartWidget from './CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Categories from '../GenreList/Categories'
import { NavLink,Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navBar">
                <Container>
                        <div>
                            <CartWidget />
                            <Link to='/' className="link-img">PelisJs</Link>
                        </div>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-links">
                            <NavLink exact to='/' activeClassName='active'>Inicio</NavLink>
                            <Categories className="categories"/>
                            <NavLink exact to='/contact' activeClassName='active'>Contactanos</NavLink>
                            <NavLink exact to='/cart'><BuyButton variant="light" size="sm"></BuyButton></NavLink>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>        
    )
}

export default NavBar