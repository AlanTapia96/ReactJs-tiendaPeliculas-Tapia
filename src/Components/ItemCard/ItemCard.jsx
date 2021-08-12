import ItemCount from "../ItemCount/ItemCount";
import "./ItemCard.css"

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
            <div className="item-data">  
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Precio unitario: {price}</p>              
                <ItemCount stock={6} key={id} initial={1} onAddItem={handleAddItem} className="item-data__itemCount"/>
            </div>
            
        </div>

    )
}

export default ItemCard