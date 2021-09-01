import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

export const SubMenu = () => {

  const service = menu.map(serv => <Link key={serv.id} to={serv.path}><li className="navigation__sub--item">{serv.title}</li></Link>)
  return (
    <ul className="sub-menu">
      {service}
    </ul>
  );
};
