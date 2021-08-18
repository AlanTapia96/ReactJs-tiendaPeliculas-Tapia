import ItemCount from "../ItemCount/ItemCount";
import "./ItemCard.css"
import { Link } from "react-router-dom"

const handleAddItem = (cant) => {
    console.log(`${cant} producto/s agregados con éxito!`);
}

const ItemCard = (item) => {
    const {id,title,description,price,pictureUrl} = item;
    return(
        <div className="card item">
            <div className="item-img">
                <img src={pictureUrl} alt="" />
            </div>
            <div className="item-data" id={id}>  
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Precio unitario: {price}</p>              
                <ItemCount stock={5} key={id} initial={1} onAddItem={handleAddItem} className="item-data__itemCount"/>
                <Link to={`/film/${item.id}`} film={item}>Ver mas detalles</Link>
            </div>
            
        </div>

    )
}

export default ItemCard