import React,{useContext} from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavigationContext } from '../../context/NavigationContext';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';
import { Social } from '../../components/Social/Social';
import { LogoIcon } from '../../img/svg/LogoIcon';
import './Header.scss';

export const Header = () =>{
    const {burgerMenu} = useContext(NavigationContext);
    return(
        <header className="header">
            <HashLink to="/#" className="header__logo">
               <LogoIcon />
            </HashLink>  
            <Social />
            {!burgerMenu && <BurgerMenu/>}
        </header>
    )   
}
