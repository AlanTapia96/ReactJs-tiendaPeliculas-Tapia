import "./ItemCard.css"
import { Link } from "react-router-dom"

const ItemCard = (item) => {
    const {id,title,description,price,pirctureUrl} = item;
    return(
        <div className="card item">
            <div className="item-img">
                <img src={pirctureUrl} alt="" />
            </div>
            <div className="item-data" id={id}>  
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Precio unitario: {price}</p>              
                <Link to={`/film/${item.id}`} film={item}>Ver mas detalles</Link>
            </div>
            
        </div>

    )
}

export default ItemCard