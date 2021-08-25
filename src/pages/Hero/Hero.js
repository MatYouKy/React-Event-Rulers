import React,{useState, useContext, useEffect} from 'react';
import { NavigationContext } from '../../context/NavigationContext';
import { HashLink as Link } from 'react-router-hash-link';
import './Hero.scss';

export const Hero =()=>{
    const [opacity, setOpacity] = useState("0");
    const {burgerMenu} = useContext(NavigationContext);
    const delayText = delay => {
        setTimeout(()=>{
            setOpacity("1")
        }, delay)
    }
    useEffect(()=>{
        delayText(1000)
        },[])
        return(
        <section id="hero" className="hero" >
            <div className="hero__img">
                <div  className="hero__img--shadow"></div>
                <div style={{opacity: opacity}} className="hero__text">
                    <h1>Luksusowa oprawa uroczystości</h1>
                    <p>ponieważ kochamy to co robimy !</p>
                    <Link to="/#aboutUs"><button>poznaj nas !</button></Link>
                </div>
                {burgerMenu && <a href="#aboutUs" className="hero__arrow"><i className="fas fa-angle-down"></i></a>}
            </div>
        </section>            
    );
}