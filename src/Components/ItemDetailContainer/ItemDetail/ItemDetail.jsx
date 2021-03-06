import { useState, useContext, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';
import { CartContext } from '../../../Context/CartContext';
import ButtonItemCart from '../../Buttons/ButtonItemCart';
import styles from './ItemDetail.module.css'

const ItemDetail = ( film ) => {
    const {title,description,price, pictureUrl} = film.film;
    const [cantSeleccionada, setCantSeleccionada] = useState(0)
    const [seleccion, setSeleccion] = useState(false)
    const cartContext = useContext(CartContext);
    const [stock,setStock] = useState(6)

    const handleChangeStock = (cant) => {
        setStock(cant)
    }
 
    const handleAddItem = (cant) => {
        setCantSeleccionada(cant);
        setSeleccion(true)
    }

    useEffect( () => {
        if(cantSeleccionada !== 0){
            cartContext.addItem({...film},cantSeleccionada);
        }
    },[cantSeleccionada])

    return(
        <> 
        <Row className="g-4 m-4 justify-content-md-center">
            <Col xs={11}>
            <div className={styles['card-flex']}>
                    <div className={`col-5 ${styles['div-img']}`}>
                        <img src={pictureUrl} className={styles['itemDetail-img']} alt=""/>
                    </div>
                    <Card.Body className={`col-4 ${styles['div-body']}`}>
                        <Card.Title className={`${styles[`itemDetail-title`]} container`}>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>Cantidad disponible: {stock}</Card.Text>
                        <Card.Text>Precio unitario: {price} ARS</Card.Text>
                        {!seleccion && 
                            <>
                                <ItemCount stock={stock} initial={1} onAddItem={handleAddItem} onChangeStock={handleChangeStock} className="itemDetail-itemCount"/> 
                            </>
                        }
                        {seleccion && <div>
                            <Link to={'/cart'}>
                                <ButtonItemCart text={"Finalizar compra"}/>
                            </Link>
                            <Link to={'/'}>
                                <Button variant="primary" onClick={() => setSeleccion(false)}>Seguir comprando</Button>
                            </Link>
                        </div>}
                    </Card.Body>

            </div>
            </Col>
        </Row>
        </>
    )
}

export default ItemDetail