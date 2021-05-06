import React,{useContext} from 'react';
import '../styles/Services.scss';
import {Link} from 'react-router-dom';
import WhiteBlock from '../layouts/WhiteBlock';
import {NavigationContext} from '../context/NavigationContext';
const Services = () => {
    const {serviceList}  = useContext(NavigationContext);
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
                {serviceList.map(item => {
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
 export default Services;