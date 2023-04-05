import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleCard.css'

const SingleCard = ({ blog, handleReadTime }) => {



  return (
    <div>
      <div className="blog-card">

        <div className="blog-poster">
          <img src={blog.blogCoverImage} />
        </div>
        <div className="details">
          <div className="author">
            <div className="authorName">
              <img src={blog.authorImage} alt="" />
              <div className="">
                <h4>{blog.authorName}</h4>
                <p className='publishDate'>{blog.publishDate}</p>
              </div>
            </div>
            <div className="readTime">
              <p>{blog.readTime} min to read</p>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
          <div className="blog-title">
            <h2>{blog.blogTitle}</h2>
          </div>
          <button id='readButton' onClick={() => { handleReadTime(blog.readTime) }} >Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;