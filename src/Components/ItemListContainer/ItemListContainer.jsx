import "./ItemListContainer.css"
import ItemCount from "./ItemCount/ItemCount";


const handleAddItem = (cant) => {
    console.log(`${cant} producto/s agregados con éxito!`);
}

const ItemListContainer = () => {
    return(
        <>
            <ItemCount stock={6} initial={1} onAddItem={handleAddItem}/>
            
        </>
)}

export default ItemListContainer;