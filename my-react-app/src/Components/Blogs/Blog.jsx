import React, { useEffect, useState } from 'react';
import './Blog.css'


const Blogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('posts.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div>
      <div className="blog-container">
        <div className="blog-card">
          <div className="blog-poster">
            <img src="" alt="" />
          </div>
          h3
        </div>
      </div>
    </div>
  );
};

export default Blogs;