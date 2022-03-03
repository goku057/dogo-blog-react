import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const blogs = props.blogs;
    const handleRemoveBlog = props.handleRemoveBlog;
    return (
        <div>
        {blogs.map((blog) => {
            return (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>
                    <button onClick={() => handleRemoveBlog(blog.id)}>Delete</button>
                </div>
            )
        })}
        </div>
    );
};

export default Blog;