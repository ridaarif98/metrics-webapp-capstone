import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: '<',
    },
    // {
    //   id: 2,
    //   path: '/country',
    //   text: 'Country',
    // },
  ];
  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="navLink">
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <h3>Covid-19 metrics</h3>
      <div>
        <i class="fa fa-microphone"></i>
        <i class="fa fa-gear"></i>
      </div>
    </nav>
  );
};

export default NavBar;
