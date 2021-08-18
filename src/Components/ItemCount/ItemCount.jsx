import { useEffect, useState } from "react"
import ButtonItemCount from "../Buttons/ButtonItemCount";
import "./ItemCount.css"

const ItemCount = ( {stock=5, initial=1, onAddItem} ) => {

        const [cant,setCant] = useState(initial);
        const [disabledMore,setDisabledMore] = useState(false);
        const [disabledLess,setDisabledLess] = useState(false);
        const [disabledBuy,setDisabledBuy] = useState(false);
        

        const handleAddCant = (op) => {
            if ((cant < stock) && (op === "+")) setCant(cant+1)
            else if ((cant > 0) && (op === "-")) setCant(cant-1)
        }

        useEffect(() =>{       
            if(cant === 0){
                setDisabledLess(true);
                setDisabledBuy(true);
                setDisabledMore(false);
            }else if (cant === stock){
                setDisabledMore(true) ;
                setDisabledLess(false);
                setDisabledBuy(false);
            }else{
                setDisabledMore(false) ;
                setDisabledLess(false);
                setDisabledBuy(false);
            }     
        },[cant])
        
        return(
            <>
                <div className="card__body">
                    <ButtonItemCount stock={stock} handleEvent={handleAddCant} disabled={disabledLess} text="-" cantidad={cant}/>
                    <span className="card-title me-3 ms-3">{cant}</span>
                    <ButtonItemCount stock={stock} handleEvent={handleAddCant} disabled={disabledMore} text="+" cantidad={cant}/>
                </div>
                <div className="card__button">
                    <ButtonItemCount handleEvent={onAddItem} text={"Agregar al carrito"} disabled={disabledBuy} cantidad={cant} className="buyButton"/> 
                </div>
            </>
    )}

export default ItemCount