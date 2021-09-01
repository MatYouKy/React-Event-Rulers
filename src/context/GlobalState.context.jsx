import React, { createContext, useState, useEffect } from 'react';
import { getWidth } from '../utilities/getWidth';

export const GlobalState = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [menu, setMenu] = useState(getWidth());
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  useEffect(() => {
    const handleResizeWidth = () => {
      setMenu(getWidth());
    };
    window.addEventListener('resize', handleResizeWidth);

    return () => window.removeEventListener('rezise', handleResizeWidth);
  });
  return <GlobalState.Provider value={{ menu, toggle, handleToggle }}>{children}</GlobalState.Provider>;
};
