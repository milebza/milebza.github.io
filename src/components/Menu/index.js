import React from 'react';
import { NavLink } from 'react-router-dom';

const setLinkClass = isActive =>
  isActive
  ? 'menu__link menu__link--active'
  : 'menu__link';

const setLinkHeaderClass = isActive =>
  isActive
  ? 'menu__link-header'
  : 'menu__link-header';

const Menu = () => (
  <div className="menu">
    <div className="menu__wrapper">
      <div className="menu__header-wrapper">
      <header>
      <NavLink
        to="/"
        className={({ isActive }) => setLinkHeaderClass(isActive)}
      >
        <h2 className='menu__title'>
        milena<br />
        baeza
        </h2>
      </NavLink>
    </header>
      <p className='menu__p'>
        for inquiries<br />
        <a href="mailto:hello@milenabaeza.com">hello@milenabaeza.com</a>
      </p>
      </div>
    <nav className="menu__nav" aria-label="Primary navigation">
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
  </div>
);

export default Menu;
