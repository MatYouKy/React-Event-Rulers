import React, { createContext, useState } from 'react';


export const GlobalState = createContext();

export const GlobalStateProvider = ({children}) => {
    const [menu, setMenu] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleMenu = () => setMenu(!menu);
    const handleToggle = () => setToggle(!toggle);

    const burger = {
        menu,
        toggle,
        handleMenu,
        handleToggle
    }

    
    return (
        <GlobalState.Provider value={ { burger } }>
            {children}
        </GlobalState.Provider>
    );
}