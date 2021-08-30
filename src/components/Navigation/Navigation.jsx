import React, { useContext, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { GlobalState } from '../../context/GlobalState.context';
import { navList } from '../../constans/navigationData';
import './Navigation.scss';

export const Navigation = () => {
  const style ={
    transform: 'translateY(0)'
  };
  const { handleToggle, menu, toggle } = useContext(GlobalState);
  const [current, setCurrent] = useState(' ');
  const handleIsOpen = id => {
    setCurrent(id);
    handleToggle();
  };
  const navMenu = navList.map(link => {
    let subMenu;

    if (current.toString === 'services') {
        subMenu = link.servicesSub.map(sub => (
        <li key={sub.id}>
          <Link to={sub.path}>{sub.title}</Link>
        </li>
      ));
    } else if (current === 'attraction') {
        subMenu = link.attractionSub.map(sub => (
        <li key={ sub.id }>
            <Link to={ sub.path }>{ sub.title }</Link>
        </li>
        ))
    }
    return <li key={ link.id }><Link onClick={ ()=> handleIsOpen(link.id)} to={ link.path } exact={ link.exact } className="nav__item">{ link.title }<ul>{ menu && subMenu }</ul></Link></li>
  } 


  return (
    <nav className="nav" style={ toggle ? style : null }>
      <div className="nav__items">
        <ul>{ navMenu }</ul>
      </div>
    </nav>
  );
};