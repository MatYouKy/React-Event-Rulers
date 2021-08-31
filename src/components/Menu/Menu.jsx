import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { navList, services } from '../../constans/navigationData';
import './Menu.scss';

export const Menu = () => {

  const service = services.map(sub => 
  <Link key={sub.id} to={sub.path}>
    <li className="navigation__item">{sub.name}</li>
  </Link> );

  const menu = navList.map(nav => (
    <HashLink key={nav.id} to={nav.path}>
      <li className="navigation__item">
        {nav.title}<ul>{service}</ul>
      </li>
    </HashLink>
  ));

  return (
    <nav className="navigation">
      <ul>{menu}</ul>
    </nav>
  );
};
