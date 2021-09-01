import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

type ServType = {
  id: string;
  title: string;
  path: string;
  describe: string;
  icon?: () => JSX.Element;
};
type AttType = {
  id: string;
  title: string;
  path: string;
};

interface SubMenuProps {
  subMenu: ServType[] | AttType[];
}

export const SubMenu: React.FC<SubMenuProps> = ({subMenu}): JSX.Element => {

  const service = subMenu.map(serv => <Link key={serv.id} to={serv.path}><li className="navigation__sub--item">{serv.title}</li></Link>)
  return (
    <ul className="sub-menu">
      {service}
    </ul>
  );
};
