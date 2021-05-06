import React, {useContext} from 'react';
import {NavigationContext} from '../context/NavigationContext';
import '../styles/BurgerMenu.scss';

const BurgerMenu =() =>{

    const {burgerToggle, burgerTogglerState} = useContext(NavigationContext);
    const line0 ={
        transform: "rotate(45deg) translateX(9px) translateY(7px)",
        translate: "(-50%, -50%)"
    }
    const line2 ={
        transform: "rotate(-45deg) translateX(7px) translateY(-6px)",
        translate: "(-50%, -50%)"
    }
    return(
        <div className="burger-menu" onClick={burgerTogglerState}>
            <div className="burger-menu__container" id="cont">
                <div className="line" id="line0" style={burgerToggle? line0:null} ></div>
                <div className="line" id="line1" style={burgerToggle? {opacity:"0"}:null}></div>
                <div className="line" id="line2" style={burgerToggle? line2:null}></div>
                <div className="txt-container" style={burgerToggle? {opacity:"0"}:null}><span>MENU</span></div>
            </div>
        </div>
    );
}
export default BurgerMenu;