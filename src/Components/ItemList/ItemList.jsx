import ItemCard from "../ItemCard/ItemCard"
import { Col,Row } from "react-bootstrap"

const ItemList = ( {items} ) => {
    return(
    <div className="itemList">
        <Row>
            {items.map( (item) => 
                <Col md={4} key={item.id}>
                    <ItemCard {...item}  />
                </Col>
            )}    
        </Row>   
    </div>
)}

export default ItemList