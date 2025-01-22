import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; // Optional: for styling

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <a
        href="https://www.tiktok.com/@iskandarfilm?_t=ZS-8tGtiyzUaJ7&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="tiktok-link"
      >
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
    </header>
  );
};

export default Header;
