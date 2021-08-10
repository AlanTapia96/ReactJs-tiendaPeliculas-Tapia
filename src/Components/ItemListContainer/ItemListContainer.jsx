import "./ItemListContainer.css"

import ItemList from "../ItemList/ItemList";


const itemsData = [
            { id: 1, title: "Pelicula 1", description: "Descripción de la película 1", price: 150, pictureUrl: 'http://via.placeholder.com/150x150'},
            { id: 2, title: "Pelicula 2", description: "Descripción de la película 2", price: 250, pictureUrl: 'http://via.placeholder.com/150x150'},
            { id: 3, title: "Pelicula 3", description: "Descripción de la película 3", price: 350, pictureUrl: 'http://via.placeholder.com/150x150'},
            { id: 5, title: "Pelicula 4", description: "Descripción de la película 4", price: 450, pictureUrl: 'http://via.placeholder.com/150x150'}
]
       

const getItemsData = () => {
    console.log('Esperando respuesta...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const items = itemsData;
            items.length > 0 ? resolve(items) : reject("Error")}
            ,2000)
})}

const getItems = new Promise(async (resolve,reject) => {
    const items = await getItemsData();
    (items.length > 0) ? resolve(items) : reject("")
})


// const items = getItems;
// console.log("items",items)

const ItemListContainer = () => {
    return(
        <>
            <ItemList items={async() => await getItems}/>
        </>
)}

export default ItemListContainer;