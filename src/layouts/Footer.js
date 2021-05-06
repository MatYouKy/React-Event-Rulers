import React from 'react';
import Social from '../components/Social';
import '../styles/Footer.scss';
import WhiteBlock from './WhiteBlock';
import LogoIcon from "../img/svg/LogoIcon";
import LogoText from "../img/svg/LogoText";

const Footer = () => (
    <footer id="footer" className="footer scroll-fix">
        <WhiteBlock className="white-block white-block__right" color={"#f3f3f3"} />
        <div className="wrapper">
            <div className="footer__boxes">
                <div className="footer__box">
                    <div className="footer__box--title"><div className="footer__box--logo"> <LogoIcon /> <LogoText /></div></div>
                    <p>Event Rulers oferuje topowych DJów, konferansjerów oraz muzyków na wesele.</p>
                    <div className="footer__box--social">
                        <Social />
                    </div>
                </div>
                
                <div className="footer__box footer__box--desktop">
                    <h3 className="footer__box--title">Usługi</h3>
                    <ul className="footer__box--list">

                        <li className="footer__box--list-item" href="#">Wesela</li>
                        <li className="footer__box--list-item" href="#">Eventy</li>
                        <li className="footer__box--list-item" href="#">Okoliczności</li>
                        <li className="footer__box--list-item" href="#">Nagłośnienie</li>
                        <li className="footer__box--list-item" href="#">Oświetlenie</li>
                        <li className="footer__box--list-item" href="#">Dodatki</li>
                    </ul>
                </div>
                <div className="footer__box footer__box--desktop">
                    <h3 className="footer__box--title">Main</h3>
                    <ul className="footer__box--list">
                        <li className="footer__box--list-item"><a href="#home">home</a></li>
                        <li className="footer__box--list-item"><a href="#aboutUs">o nas </a> </li>
                        <li className="footer__box--list-item"><a href="#services">usługi</a> </li>
                        <li className="footer__box--list-item"><a href="#recommend">opinie</a> </li>
                        <li className="footer__box--list-item"><a href="#contact">kontakt </a> </li>

                    </ul>
                </div>
            </div>
        </div>
        <p className="footer__bottom--text">&copy; <span className="footer__year"></span><LogoText 
        height="12px" 
        fill="#F3F3F3"
        /> -- 2021</p>
    </footer>
)

 
export default Footer;