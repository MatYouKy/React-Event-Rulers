import React, { createContext, useState, useEffect } from 'react';


export const GlobalState = createContext();

export const GlobalStateProvider = ({children}) => {
    const [menu, setMenu] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(null)

    const handleToggle = () => setToggle(!toggle);
    
    const handleMenu = () => {
        if(width >= 992){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }

    const handleWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', handleWidth);
        handleMenu();
    });
    

    const burger = {
        menu,
        toggle,
        handleToggle
    }

    
    return (
        <GlobalState.Provider value={ { burger } }>
            {children}
        </GlobalState.Provider>
    );
}