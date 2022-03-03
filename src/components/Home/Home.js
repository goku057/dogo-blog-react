import React, { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import useFetch from "../../customHooks/useFetch";
import { useHistory } from 'react-router-dom';

const Home = () => {

    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    const history = useHistory();
    
    const handleRemoveBlog = (id) => {
        fetch("http://localhost:8000/blogs/" + id, {method:"DELETE"}).then(()=>{
            history.go(0);
        })
        // setBlogs(newBlogs);
    }
    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Blog blogs = {blogs} handleRemoveBlog = {handleRemoveBlog}/>}
        </div>
    );
};

export default Home;