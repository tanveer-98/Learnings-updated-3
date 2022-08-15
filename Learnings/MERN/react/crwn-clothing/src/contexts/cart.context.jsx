import React,{useState,createContext} from 'react';

export const CartContext = createContext({
        cart:[],
        setCart :()=>null
})

export const CartProvider = ({children})=>{
    const [cart ,setCart] = useState([]);
    const value = {cart,setCart};

    return <CartContext.Provider value ={value}>{children}</CartContext.Provider>
}