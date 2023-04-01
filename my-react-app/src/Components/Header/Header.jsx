import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <nav className="text-dark d-flex justify-content-between mx-auto mt-200">
      <div>
        <h1 class="font-weight-bold">Knowledge Cafe</h1>
      </div>

      <div className="text-dark nav-item d-flex justufy-content-around align-item-center">
        <a className='text-decoration-none text-dark' href="#">Home</a>
        <a className='text-decoration-none' href="#">Posts</a>
        <a className='text-decoration-none' href="#">About</a>
      </div>
    </nav>
  );
};

export default Header;