import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import { navList, services, attraction } from '../../constans/navigationData';
import { SubMenu } from './SubMenu';

import './Menu.scss';

export const MainMenu: React.FC = () => {
  const menu = navList.map(nav =>
    <HashLink key={nav.id} to={nav.path}>
      <li className="navigation__item">
        {nav.title}
        <FA icon={nav.icon} />
        {nav.services && <SubMenu subMenu={services} />}
        {nav.attraction && <SubMenu subMenu={attraction} />}
      </li>
    </HashLink>);

  return (
    <nav className="navigation">
      <ul>{menu}</ul>
    </nav>
  );
};

