import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"

const handleAddItem = (cant) => {
    console.log(`${cant} producto/s agregados con éxito!`);
}

const ItemCard = (item) => {
    const {id,title,description,price,pictureUrl} = item;
    return(
        <div className="item">
            <div className="item__data">
                <h3>{title}</h3>
                <h5>{description}</h5>
                <h5>{price}</h5>
                <img src={pictureUrl} alt="" />
            </div>
            <ItemCount stock={6} key={id} initial={1} onAddItem={handleAddItem}/>
            
        </div>

    )
}

export default ItemCard