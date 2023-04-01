import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav className="navbar d-flex justify-around">
        <div className="navbar_brand">Knowledge Cafe</div>
        <div className="navbar_user d-flex g-5">
          <a href="#">Home</a>
          <a href="#">Posts</a>
          <a href="#">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;