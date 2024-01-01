import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const setLinkClass = isActive =>
  isActive
  ? 'menu__link menu__link--active'
  : 'menu__link';

const setLinkHeaderClass = isActive =>
  isActive
  ? 'menu__link-header'
  : 'menu__link-header';

const Menu = ({
  isDarkMode = false
}) => (
  <div className={cn('menu', {
        'menu--dark': isDarkMode
    })}
  >
    <header className="menu__header">
      <NavLink
        to="/"
        className={({ isActive }) => setLinkHeaderClass(isActive)}
      >
        Milena{' '}
        Baeza
      </NavLink>
    </header>
    <nav className="menu__nav">
        <div>
        <NavLink
          to="/"
          className={({ isActive }) => setLinkClass(isActive)}
        >About</NavLink>
        </div>
        <div>
        <NavLink
          to="/archive"
          className={({ isActive }) => setLinkClass(isActive)}
        >Archive</NavLink>
        </div>
        <div>
        </div>
        <div>
        <NavLink
          to="/book"
          className={({ isActive }) => setLinkClass(isActive)}
        >Book</NavLink>
        </div>
    </nav>
  </div>
);

export default Menu;
