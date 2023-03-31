import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__brand">Knowledge Cafe</div>
        <div className="navbar__user d-flex g-5">
          <a href="#">Home</a>
          <a href="#">Posts</a>
          <a href="#">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;