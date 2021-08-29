import { useEffect, useState } from "react"
import { Col,Row } from "react-bootstrap"
import ItemCart from "../ItemCart/ItemCart"
import "./ItemCartList.css"

const ItemCartList = ( props ) => {

    const { films, onDelete } = props;
    const [filmData,setFilmData] = useState(films);

    return(
        <div className="itemCartList">
            <Row>
                {filmData.map( (film) =>
                <Col xs={12} key={film.film.id}>
                    <ItemCart {...film} onDeleteEvent={onDelete}/>
                </Col> 
                )}
            </Row>
        </div>
    )
}

export default ItemCartList