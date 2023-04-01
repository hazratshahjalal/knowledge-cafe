import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blog';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {


  return (
    <div>
      <div className="header m-auto">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="blogs-container col-md-8">
          <Blogs></Blogs>
        </div>
        <div className="sidebar col-md-4 card">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>

  );
}

export default App
