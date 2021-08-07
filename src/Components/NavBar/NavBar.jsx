import './NavBar.css'
import Button from "../Buttons/Button";
import CartWidget from './CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <div>
                        <CartWidget />
                        <Navbar.Brand href="#home">PelisJs</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#peliculas">Películas</Nav.Link>
                        <Nav.Link href="#contactanos">Contactanos</Nav.Link>
                        <Button variant="light" size="sm"></Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>        
    )
}

export default NavBar