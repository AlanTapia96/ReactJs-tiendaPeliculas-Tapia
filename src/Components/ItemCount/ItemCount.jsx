import { useState } from "react"
import ButtonItemCart from "../Buttons/ButtonItemCart";
import "./ItemCount.css"

const ItemCount = ({ stock=5, initial=1, onAddItem }) => {

        const [cant,setCant] = useState(initial);

        const handleCant = {
            agregar: () => { 
                if(stock !== 0){
                    setCant(cant+1); 
                }
            },
            restar: () => {
                if(cant>0){     
                    setCant(cant-1)
                }
            }     
        }

        const handleAddChart = () => {
            onAddItem(cant)
        }
        
        return(
            <>
                <div className="card__body">
                    <button type="button" disabled={cant===0} className="btn btn-primary" onClick={handleCant.restar}>-</button>
                    <span className="card-title me-3 ms-3">{cant}</span>
                    <button type="button" disabled={cant===stock} className="btn btn-primary" onClick={handleCant.agregar}>+</button>
                </div>
                <div className="card__button">
                    <ButtonItemCart handleEvent={handleAddChart} cant={cant} text={"Agregar al carrito"} disabled={cant===0} className="buyButton"/> 
                </div>
            </>
    )}

export default ItemCount