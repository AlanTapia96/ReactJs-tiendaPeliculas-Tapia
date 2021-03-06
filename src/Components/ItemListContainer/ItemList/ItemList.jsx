import ItemCard from "../../ItemCard/ItemCard"
import styles from './ItemList.module.css'
import { Col,Row } from "react-bootstrap"



const ItemList = ({ items }) => {
    return(
    <div className={styles.itemList}>
        <Row>
            {items.map( (item) => 
                <Col xs={12} lg={6} xxl={4} key={item.id}>
                    <ItemCard {...item}  />                 
                </Col>
            )}    
        </Row>   
    </div>
)}

export default ItemList