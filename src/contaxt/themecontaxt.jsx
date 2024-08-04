import { createContext, useContext, useEffect, useState } from "react";

// Ek naya context banaye jiska naam Themecontext hai
const Themecontext = createContext();

// ThemeProvider component jo un parts of the app ko wrap karega jinhe theme context ki access chahiye
export const ThemeProvider = ({ children }) => {
  // State jo current theme ko hold karega, shuru mein "light" set kiya gaya hai
  const [theme, setTheme] = useState("light");

  // useEffect hook jo body's class ko update karega jab bhi theme change hogi
  useEffect(() => {
    document.body.classList = theme;
  }, [theme]); // Theme ko dependency mein add kiya gaya hai taaki yeh tab chale jab theme change ho

  // Function jo theme ko "light" aur "dark" ke beech toggle karega
  const modebtn = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Context provider ko return karega jisme current theme aur toggle function as values hain
  return (
    <Themecontext.Provider value={{ theme, modebtn }}>
      {children} {/* Children components ko render karega */}
    </Themecontext.Provider>
  );
};

// Custom hook to use the Themecontext
export const useTheme = () => useContext(Themecontext);



// import React, { createContext, useContext, useState } from 'react'
// const themeContext = createContext();

// export const ThemeProvider = ({children}) => {
//     const modebtn = ()=>{

//     }

//     const [theme, setTheme] = useState(false)
//   return (
//     <themeContext.Provider value={theme}>
//         {children}
//     </themeContext.Provider>
//   )
// }

// export const useTheme = ()=> useContext(themeContext);
