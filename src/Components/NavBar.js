import Button from "./Buttons/Button";

export default function NavBar() {
    return(
        <>
            <h2>PelisJs</h2>
            <a href="/#">Inicio</a>
            <a href="/#">Películas</a>
            <a href="/#">Contactanos</a>
            <Button name='Carrito'/>
        </>
    )
}