import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/metrics-webapp-capstone/',
      text: '<',
    },
  ];
  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} className="navLink">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <h3>Covid-19 metrics</h3>
      <div>
        <i className="fa fa-microphone" />
        <i className="fa fa-gear" />
      </div>
    </nav>
  );
};

export default NavBar;
