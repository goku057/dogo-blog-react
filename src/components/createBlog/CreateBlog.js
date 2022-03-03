import React, { useState } from 'react';


const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("doggo1");
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body, author};
        fetch("http://localhost:8000/blogs", {method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            setIsPending(false);
        })
    }
    return (
        <div className='create'>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required
                    value={title}
                    onChange={(e) => {
                        return setTitle(e.target.value);
                    }}
                />
                <label>Blog Body:</label>
                <textarea required
                    value={body}
                    onChange={(e) => {
                        return setBody(e.target.value);
                    }}
                ></textarea>
                <label>Blog Author</label>
                <select value={author}
                    onChange={(e) => {
                        return setAuthor(e.target.value);
                    }}

                >
                    <option value="doggo1">Doggo1</option>
                    <option value="doggo2">Doggo2</option>
                </select>
                {isPending && <button disabled>Submitting the form</button>}
                {!isPending && <button>Add blog</button>}
            </form>
        </div>
    );
};

export default CreateBlog;