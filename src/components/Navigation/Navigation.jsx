import React, { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { GlobalState } from '../../context/GlobalState.context';
import { navList } from '../../constans/navigationData';
import './Navigation.scss';

export const Navigation = () => {
  const style = {
    transform: 'translateY(0)'
  };
  const { handleToggle, toggle } = useContext(GlobalState);
  const handleIsOpen = () => {
    handleToggle();
  };
  const navMenu = navList.map(link => (
    <li key={link.id}>
      <Link onClick={() => handleIsOpen(link.id)} to={link.path} exact={link.exact} className="nav__item">
        {link.title}
      </Link>
    </li>
  ));

  return (
    <nav className="nav" style={toggle ? style : null}>
      <div className="nav__items">
        <ul>{navMenu}</ul>
      </div>
    </nav>
  );
};
