import React from 'react';

const SingleCard = () => {

  return (
    <div>
      <div className="blog-card">

        <div className="blog-poster">
          <img src="https://images.unsplash.com/photo-1560415755-bd80d06eda60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className="details">
          <div className="author">
            <img src="https://picsum.photos/50" alt="" />
            <div className="name">
              <h4>Mr. Razu</h4>
              <p className='publishDate'>March 14</p>
            </div>
            <div className="readTime">5 min read</div>
            <p>icon</p>
          </div>
          <div className="blog-title">
            <h2>How to teach </h2>
          </div>
          <button>Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;