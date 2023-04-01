import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <div className="readTime">
        <p>Spent time on read: { }min</p>
      </div>
      <div className="bookmarked">
        <h3>Bookmarked Blogs { }</h3>
        <p>{ }</p>
      </div>
    </div>
  );
};

export default Sidebar;