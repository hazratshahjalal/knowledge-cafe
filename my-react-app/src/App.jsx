import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Post';

import Sidebar from './Components/Sidebar/Sidebar';
import Question from './Components/Blog/Question';


function App() {
  const [reatTime, setReadTime] = useState("")
  const handleReadTime = (time) => {
    const prevReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (prevReadTime) {
      const sum = prevReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum)

    }
    else {
      localStorage.setItem("readTime", time)
      setReadTime(time)
    }
  }


  return (
    <div>
      <div className="header m-auto">
        <Header></Header>
      </div>
      <div className="main row main-container">
        <div className="blogs-container col-md-8">
          <Posts handleReadTime={handleReadTime}></Posts>
        </div>
        <div className="sidebar col-md-4 card">
          <Sidebar reatTime={reatTime}></Sidebar>
        </div>
      </div>
      <Question></Question>
    </div>

  );
}

export default App
