import React, { useContext } from 'react'
import { GlobalState } from '../../context/GlobalState.context';
import './BurgerMenu.scss';

export const BurgerMenu =() =>{
    const { burger } = useContext(GlobalState);

    const line0 ={
        transform: "rotate(45deg) translateX(9px) translateY(7px)",
        translate: "(-50%, -50%)"
    };
    const line2 ={
        transform: "rotate(-45deg) translateX(7px) translateY(-6px)",
        translate: "(-50%, -50%)"
    };

    return(
        <div className="burger-menu" onClick={ burger.handleToggle }>
            <div className="burger-menu__container" id="cont">
                <div className="line" id="line0" style={ burger.toggle ? line0:null } ></div>
                <div className="line" id="line1" style={ burger.toggle ? { opacity : "0" } : null }></div>
                <div className="line" id="line2" style={ burger.toggle ? line2 : null }></div>
                <div className="txt-container" style={ burger.toggle ? { opacity : "0" }: null }><span>MENU</span></div>
            </div>
        </div>
    );
}