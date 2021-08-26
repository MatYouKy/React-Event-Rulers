import React,{useContext} from 'react';
import { GlobalState } from '../../context/GlobalState.context';
import { HashLink } from 'react-router-hash-link';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';
import { Social } from '../../components/Social/Social';
import { LogoIcon } from '../../img/svg/LogoIcon';
import './Header.scss';

export const Header = () =>{
    const   { burger } = useContext(GlobalState);
    return(
        <header className="header">
            <HashLink to="/#" className="header__logo">
               <LogoIcon />
            </HashLink>  
            <Social />
            { !burger && <BurgerMenu/>}
        </header>
    )   
}
