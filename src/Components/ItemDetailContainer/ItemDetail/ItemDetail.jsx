import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import ButtonItemCart from '../../Buttons/ButtonItemCart';
import ItemCount from '../../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = (film) => {
    const {title,description,price,pictureUrl} = film.film;
    
    const [cantSeleccionada, setCantSeleccionada] = useState(1)
    const [seleccion, setSeleccion] = useState(false)
 
    const handleAddItem = (cant) => {
        setCantSeleccionada(cant);
        setSeleccion(true)
    }

    return(
        <> 
        <Row className="g-4 m-4 justify-content-md-center">
            <Col xs={11}>
            <div className="card-flex">
                <div className="card-img">
                    <img src={pictureUrl} className="itemDetail-img" alt=""/>
                </div>
                <Card.Body>
                    <Card.Title className="itemDetail-title container">{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Precio unitario: {price} ARS
                    </Card.Text>
                    {!seleccion && <>
                        <ItemCount stock={6} initial={1} onAddItem={handleAddItem} className="itemDetail-itemCount"/> 
                        </>
                    }
                    {seleccion && <div>
                        <Link to={'/cart'}>
                            <ButtonItemCart text={"Finalizar compra"}/>
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