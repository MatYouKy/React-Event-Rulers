import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { WhiteBlock } from '../../components/WhiteBlock/WhiteBlock';
import { NavigationContext } from '../../context/NavigationContext';
import './Services.scss';

export const Services = () => {
    const {navList}  = useContext(NavigationContext);

    return(
    <section id="services" className="services">
        <div className="top">
            <div className="top--shadow"></div>
            <div className="title">
                <h2>usługi</h2>
                <div className="title--underline"></div>
            </div>
        <WhiteBlock className="white-block white-block__left"/>
        </div>
        <div className="bottom">
            <div className="container">                
                {navList[2].servicesSub.map(item => {
                    return <Link className="container__link" to={item.path} key={item.id} exact={item.exact}>
                        <div className="container__square">
                            {item.icon}
                            <h3>{item.title}</h3>
                            <p>{item.describe}</p>
                        </div>
                    </Link>})}
            </div>
        </div>
    </section>
    );
}
