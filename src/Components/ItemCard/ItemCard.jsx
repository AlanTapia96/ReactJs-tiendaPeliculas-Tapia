import styles from "./ItemCard.module.css"
import { Link } from "react-router-dom"

const ItemCard = (item) => {
    const {id,title,description,price,pictureUrl} = item;
    return(
        <div className={`${styles.card} ${styles.item}`}>
            <div className={`${styles['item-img']}`}>
                <img src={pictureUrl} alt="" />
            </div>
            <div className={styles['item-data']} id={id}>  
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Precio unitario: {price}</p>              
                <Link to={`/film/${item.id}`} film={item}>Ver mas detalles</Link>
            </div>
            
        </div>

    )
}

export default ItemCard