import { useEffect } from "react";
import { useState } from "react"
import ButtonItemCart from "../Buttons/ButtonItemCart";
import "./ItemCount.css"

const ItemCount = ({ stock=5, initial=1, onAddItem, onChangeStock }) => {

        const [cant,setCant] = useState(initial);
        const [stockInicial,setStockInicial] = useState(stock)

        const handleCant = {
            agregar: () => { 
                if(stock !== 0){
                    setCant(cant+1);
                    onChangeStock(stock-1)
                }
            },
            restar: () => {
                if(cant>0){     
                    setCant(cant-1)
                    onChangeStock(stock+1)
                }
            }     
        }

        const handleAddCart = () => {
            onAddItem(cant)
        }

        useEffect( () => {
            onChangeStock(stock-1)
        },[])
        
        return(
            <>
                <div className="card__body">
                    <button type="button" disabled={cant===0} className="btn btn-primary" onClick={handleCant.restar}>-</button>
                    <span className="card-title me-3 ms-3">{cant}</span>
                    <button type="button" disabled={cant===stockInicial} className="btn btn-primary" onClick={handleCant.agregar}>+</button>
                </div>
                <div className="card__button">
                    <ButtonItemCart handleEvent={handleAddCart} cant={cant} text={"Agregar al carrito"} disabled={cant===0} className="buyButton"/> 
                </div>
            </>
    )}

export default ItemCount