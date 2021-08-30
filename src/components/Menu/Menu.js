import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { navList } from '../../constans/navigationData';
import './Menu.scss';

export const Menu = () =>{
    const services = navList[2].services.map(sub => (
        <Link key={sub.id}>
            <li className='navigation__item'>{sub.name}</li>
        </Link>))
    
    console.log(services)

    const menu = navList.map(nav => <HashLink key={ nav.id } to={nav.path} ><li className='navigation__item'>{ nav.title } <ul></ul> </li></HashLink>)

    return (
        <nav className="navigation">
            <ul>
                { menu }
            </ul>
        </nav>
    )
}