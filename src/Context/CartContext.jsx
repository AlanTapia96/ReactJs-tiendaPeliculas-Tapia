import React, { useEffect, useState, createContext } from 'react';
// import CartContext from './CartContext'

export const CartContext = createContext();

const CartState = (props) => {

    const [productsCart,setProducts] = useState([])

    const añadirProducto = (filmData,cantidad) => {
        const { film } = filmData;
        const idFilm = film.id;
        if(!isInCart(idFilm)){
            setProducts(productsBefore => [...productsBefore, {film,cantidad}])  
        } else {
            alert("Ya agregó esta película al carrito")
        }
    }

    const isInCart = (id) => productsCart.find(product => product.film.id === id)? true : false

    const removeItem = (id) => {
        let newArray = [...productsCart].filter(product => product.film.id !== id);
        setProducts(newArray);
    }

    const clearCart = () => setProducts([])


    useEffect( () => {
        console.log(productsCart)
    }, [productsCart])

    return(
        <CartContext.Provider value={{productsCart,añadirProducto,clearCart,removeItem}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;