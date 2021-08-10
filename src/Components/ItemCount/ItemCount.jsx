import { useState } from "react"
import ButtonItemCount from "../Buttons/ButtonItemCount";
import "./ItemCount.css"

const ItemCount = ( {stock, initial, onAddItem} ) => {

        const [cant,setCant] = useState(initial);

        const handleAddCant = (op) => {
            if ((cant < stock) && (op === "+")) setCant(cant+1)
            else if ((cant > 1) && (op === "-")) setCant(cant-1)
        }
        
        return(
            <div className="card">
                <div className="card__body">
                    <ButtonItemCount stock={stock} handleEvent={handleAddCant} text="-" cantidad={-1}/>
                    <span className="card-title me-3 ms-3">{cant}</span>
                    <ButtonItemCount stock={stock} handleEvent={handleAddCant} text="+" cantidad={-1}/>
                </div>
                <div className="card__button">
                    <ButtonItemCount handleEvent={onAddItem} text={"Agregar al carrito"} cantidad={cant} className="buyButton"/> 
                </div>
            </div>
    )}

export default ItemCount