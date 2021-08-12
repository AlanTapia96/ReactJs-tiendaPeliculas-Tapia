import { Row, Col, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ( {film} ) => {

    const {title,description,price,pictureUrl} = film;
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
                <div>
                    <ItemCount className="itemDetail-itemCount"/>
                </div>
                </Card.Body>
            </div>
            </Col>
        </Row>
        </>
    )
}

export default ItemDetail