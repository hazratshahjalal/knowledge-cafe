import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
      <h1 class="font-weight-bold">Knowledge Cafe</h1>

      <div className="nav-item d-flex justufy-content-around align-item-center">
        <a href="#">Home</a>
        <a href="#">Posts</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
};

export default Header;