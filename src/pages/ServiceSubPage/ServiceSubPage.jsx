import React from 'react';
import { pageContain } from '../../context/ServicePageContext';
import './ServiceSubPage.scss';

export const ServiceSubPage =()=>{
  const pages =  pageContain.map(page =>(
    <section id="sub-page" className="sub-page" key={page.id}>
      <div className={`sub-page__top--${page.id}`}>
        <div className="sub-page__top--shadow" />
          <div className="sub-page__top--title">
            <h2>{page.title}</h2>
              <div className="title--underline" />
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