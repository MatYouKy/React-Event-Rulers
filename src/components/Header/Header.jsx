import React,{useContext} from 'react';
import { HashLink } from 'react-router-hash-link';
import { GlobalState } from '../../context/GlobalState.context';
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Social } from "../Social/Social";
import { LogoIcon } from '../../img/svg/LogoIcon';
import { Menu } from '../Menu/Menu';
import './Header.scss';

export const Header: React.FC = () =>{
  const   { menu } = useContext(GlobalState);
  return(
    <header className="header">
      <HashLink to="/#" className="header__logo">
        <LogoIcon />
      </HashLink>            
        {menu && < Menu />}
            <Social />
            { !menu && <BurgerMenu/>}
        </header>
    )   
}
