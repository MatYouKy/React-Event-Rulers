import React,{useState, useEffect} from 'react';
import '../styles/Hero.scss';

const Hero =()=>{
    const [opacity, setOpacity] = useState("0");
    const [scrollY, setWindowX] = useState();
    
    const delayText = () => {
        setTimeout(()=>{
            setOpacity("1")
        }, 1000)
    }


    useEffect(()=>{

        window.addEventListener('load', delayText);
        return () =>{
            window.removeEventListener('load',delayText);
        }
    }, []);
    return(
        <section id="hero" className="hero">
            <div className="hero__img">
                <div  className="hero__img--shadow"></div>
                <div style={{opacity: opacity}} className="hero__text">
                    <h1>Luksusowa oprawa uroczystości</h1>
                    <p>ponieważ kochamy to co robimy !</p>
                    <a href="#aboutUs"><button>poznaj nas !</button></a>
                </div>
                <a href="#aboutUs" className="hero__arrow"><i className="fas fa-angle-down"></i></a>
            </div>
        </section>
            
    );
}

export default Hero;