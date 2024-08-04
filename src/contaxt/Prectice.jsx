import { createContext, useContext, useEffect, useState } from "react";


const themesssssss = createContext()

export function Changetheme({children}){
    const [theme, settheme] = useState('light')
    
    useEffect(()=>{
        document.body.className = theme
    },[theme])

    const changethemebtn =  ()=>{
        settheme((abc)=>(abc=="light" ? "dark" : "light"))
    }

    return(
        <>
        <themesssssss.Provider value={{theme, changethemebtn}}>
            {children}
        </themesssssss.Provider>
        </>
    )
}
export const useThemes = ()=>useContext(themesssssss)