import React, { useEffect, useState } from 'react';
import './Blog.css'
import SingleCard from '../Cards/SingleCard';



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
        {
          blogs.map((blog) => (
            <SingleCard></SingleCard>
          ))
        }
      </div>
    </div>
  );
};

export default Blogs;