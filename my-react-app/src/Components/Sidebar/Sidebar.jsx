import React, { useEffect, useState } from 'react';
import './Sidebar.css'

const Sidebar = ({ readTime, bookmark }) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const readTimeFromStorage = localStorage.getItem("readTime");
    setTime(readTimeFromStorage);
  });

  const [marked, setMarked] = useState(0)

  useEffect(() => {
    const bookmarkedOld = localStorage.getItem('bookmark');
    setMarked(bookmarkedOld)
  })





  return (
    <div>
      <div className="readTime">
        <p>Spent time on read: {time}min</p>
      </div>
      <div className="bookmarked">
        <h3>Bookmarked Blogs {marked}</h3>
        <p>
          <ul>
            <li className='listTitle'></li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;