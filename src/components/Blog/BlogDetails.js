import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();
    // console.log(blog);
    const handleRemove = ()=>{
        fetch("http://localhost:8000/blogs/" + id, {method: "DELETE"})
        .then(()=>{
            history.push("/");
        }
        );
    }
    return (
        <div>
            {isPending && <div>Blog is loading...</div>}
            {error && <div>{error}</div>}
            {blog && ( 
                <article className='blog-details'>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleRemove}>Delete the Post</button>
                </article>
            )}
            
        </div>
    );
};

export default BlogDetails;