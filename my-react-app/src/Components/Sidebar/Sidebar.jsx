import React, { useEffect, useState } from 'react';

const Sidebar = ({ readTime }) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const readTimeFromStorage = localStorage.getItem("readTime");
    setTime(readTimeFromStorage);
    console.log(readTimeFromStorage)
  });

  return (
    <div>
      <div className="readTime">
        <p>Spent time on read: {time}min</p>
      </div>
      <div className="bookmarked">
        <h3>Bookmarked Blogs { }</h3>
        <p>{ }</p>
      </div>
    </div>
  );
};

export default Sidebar;