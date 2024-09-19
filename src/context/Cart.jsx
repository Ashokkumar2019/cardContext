import { useState } from "react";
import { createContext } from "react";
export const cardcontext = createContext(null);
export const Cardprovider=(props)=>{
    const [items,setItems]=useState([])
    return <cardcontext.Provider value={{items,setItems}}>{props.children}</cardcontext.Provider>
}