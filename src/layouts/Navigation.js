import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {NavigationContext} from '../context/NavigationContext';
import '../styles/Navigation.scss';

const Navigation =()=>{
    const style ={
        transform: "translateY(0)"
    }

    const {navList, burgerToggle, burgerTogglerState} = useContext(NavigationContext)
        const navMenu = navList.map(link => {
        return <li onClick={burgerTogglerState} key={link.name}><Link to={link.path} exact={link.exact}  className="nav__item">{link.name}</Link></li>
    })
    return(
        <>
            <nav className="nav" style={burgerToggle? style : null}>
                <div className="nav__items">
                    <ul>{navMenu}</ul>
                </div>
            </nav>
        </>
        
    );
}
export default Navigation;