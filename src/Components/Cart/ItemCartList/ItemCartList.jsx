import { Col,Row } from "react-bootstrap"
import ItemCart from "../ItemCart/ItemCart"
import styles from "./ItemCartList.module.css"

const ItemCartList = ( props ) => {

    const { films, onDelete } = props;

    return(
        <div className={styles.itemCartList}>
            <Row>
                {films.map( (film) =>
                <Col xs={12} key={film.film.id}>
                    <ItemCart {...film} onDeleteEvent={onDelete}/>
                </Col> 
                )}
            </Row>
        </div>
    )
}

export default ItemCartList