import { Children, createContext, useContext, useEffect, useState } from "react";

const ColorContext = createContext()

export const ColorProvider = ({children})=>{

    const [color , setColor] = useState("black");

    function colorChangeBtn(){
        setColor((aaa)=>(aaa==="black" ? "red" : "black"))
     
    }
    useEffect(()=>{
        console.log("iejfi");
    },[])
    return(
        <>
            <ColorContext.Provider value={{color, colorChangeBtn}}>
                {children}
            </ColorContext.Provider>
        </>
    )
} 

export const useColor = ()=> useContext(ColorContext)