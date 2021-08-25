import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { NavigationContext } from '../../context/NavigationContext';
import { Social } from '../Social/Social';
import { WhiteBlock } from '../../components/WhiteBlock/WhiteBlock';
import { LogoIcon } from "../../img/svg/LogoIcon";
import { LogoText } from "../../img/svg/LogoText";
import './Footer.scss';

export const Footer = () => {
    const {navList} = useContext(NavigationContext);
    
    return(
    <footer id="footer" className="footer scroll-fix">
            <WhiteBlock className="white-block white-block__right" color={"#f3f3f3"} />
            <div className="wrapper">
                <div className="footer__boxes">
                    <div className="footer__box">
                        <div className="footer__box--title"><div className="footer__box--logo"> <LogoIcon height="40"/> <LogoText /></div></div>
                        <p>Event Rulers oferuje topowych DJów, konferansjerów oraz muzyków na wesele.</p>
                        <div className="footer__box--social">
                            <Social />
                        </div>
                    </div>
                    
                    <div className="footer__box footer__box--desktop">
                        <h3 className="footer__box--title">Usługi</h3>
                        <ul className="footer__box--list">
                            {navList[2].servicesSub.map(item =>{
                                return <li className="footer__box--list-item" key={item.id}><Link  to={item.path}  exact={item.exact}>{item.title}</Link></li>
                            })}
                        </ul>
                    </div>
                    <div className="footer__box footer__box--desktop">
                        <h3 className="footer__box--title">Main</h3>
                        <ul className="footer__box--list">
                        {navList.map(item =>{
                                return <li className="footer__box--list-item" key={item.id}><HashLink smooth to={item.path}  exact={item.exact}>{item.title}</HashLink></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <p className="footer__bottom--text">&copy; <span className="footer__year"></span><LogoText 
            height="12px" 
            fill="#F3F3F3"/> -- 2021</p>
        </footer>
    );    
}
