import React, { useEffect, useState } from 'react';
import './Post.css'
import SingleCard from '../Cards/SingleCard';



const Blogs = ({ handleReadTime, handleBookmark }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('posts.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div>
      <div className="blog-container">
        {
          blogs.map((blog) => (
            <SingleCard
              handleReadTime={handleReadTime}
              blog={blog}
              handleBookmark={handleBookmark}>

            </SingleCard>
          ))
        }
      </div>
    </div>
  );
};

export default Blogs;