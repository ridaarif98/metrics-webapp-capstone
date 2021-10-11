import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: '<',
    },
    {
      id: 2,
      path: '/country',
      text: 'Country',
    },
  ];
  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
      <span>Settings</span>
    </nav>
  );
};

export default NavBar;
