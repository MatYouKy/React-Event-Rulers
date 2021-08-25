import {createContext} from 'react';

export const defaultObject ={
    isUSerLogged: false,
    toggleLoggedState: () =>{},
}
export const AppContext = createContext(defaultObject);