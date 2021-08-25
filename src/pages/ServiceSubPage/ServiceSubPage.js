import React, {useContext} from 'react';
import { Article } from '../../components/Article/Article';
import { ServicePageContext } from '../../context/ServicePageContext';
import './ServiceSubPage.scss';

export const ServiceSubPage =()=>{
    const {pageContain}  = useContext(ServicePageContext);
    const pages =  pageContain.map(page =>(
            <section id="sub-page" className="sub-page" key={page.id}>
            <div className={`sub-page__top--${page.id}`}>
                
                <div className="sub-page__top--shadow"></div>
                <div className="sub-page__top--title">
                    <h2>{page.title}</h2>
                    <div className="title--underline"></div>
                </div>
            </div>


            <div className="sub-page__bottom">
                <div className="container">                
                    <Article title={page.title} heading={page.heading} description={page.description}/>
                </div>
            </div>
        </section>
    ))
    return(
        <>
            {pages}
        </>
    );
}