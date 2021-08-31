import React, { useContext } from 'react'
import { GlobalState } from '../../context/GlobalState.context';
import './BurgerMenu.scss';

export const BurgerMenu =() =>{
  const { toggle, handleToggle } = useContext(GlobalState);
  const line0 ={
    transform: 'rotate(45deg) translateX(9px) translateY(7px)',
    translate: '(-50%, -50%)'
  };
  const line2 ={
    transform: "rotate(-45deg) translateX(7px) translateY(-6px)",
    translate: "(-50%, -50%)"
  };
  return(
    <div className="burger-menu" onClick={handleToggle} onKeyDown={handleToggle} role="button" tabIndex = { 0 }>
      <div className="burger-menu__container" id="cont">
        <div className="line" id="line0" style={ toggle ? line0:null } />
        <div className="line" id="line1" style={ toggle ? { opacity : "0" } : null }/>
        <div className="line" id="line2" style={ toggle ? line2 : null }/>
        <div className="txt-container" style={ toggle ? { opacity : "0" }: null }><span>MENU</span></div>
      </div>
    </div>
  );
}