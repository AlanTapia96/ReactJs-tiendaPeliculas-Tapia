import React, { useEffect, useState, createContext, useContext } from 'react';
import NotyfContext from '../Libraries/Notyf/NotyfContext'

export const CartContext = createContext();

const CartState = (props) => {

    const [productsCart,setProducts] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)
    const notyf = useContext(NotyfContext);

    const addItem = (filmData,cantidad) => {
        const { film } = filmData;
        const price = film.price;
        const idFilm = film.id;
        
        let filmInCart = isInCart(idFilm);
        if(!filmInCart){
            setProducts(productsBefore => [...productsBefore, {film,cantidad}])
            notyf.open({ type: 'success', message: "Película agregada al carrito con éxito!"})  
        } else {
            removeItem(idFilm);
            setProducts(productsBefore => [...productsBefore, {film,cantidad}])
            notyf.open({ type: 'warning', message: "Se actualizó la cantidad seleccionada" }) 
        }
        setTotalPrice(prev => prev + (price*cantidad))
    }

    const isInCart = (id) => productsCart.find(product => product.film.id === id)

    const removeItem = (id,price,cantidad) => {
        let newArray = productsCart.filter(product => product.film.id !== id);
        setProducts(newArray);
        setTotalPrice(prev => prev - (price*cantidad))
    }

    const clearCart = () => {
        setProducts([]);
        setTotalPrice(0)
    }


    useEffect( () => {
        // console.log(productsCart)
    }, [productsCart])

    return(
        <CartContext.Provider value={{productsCart,totalPrice,añadirProducto: addItem,clearCart,removeItem}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;