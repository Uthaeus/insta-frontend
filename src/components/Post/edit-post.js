import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PostForm from "./post-form";

function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.log('edit post error: ', error));
    }, [id]);

    return (
        <div>
            <h1>Edit Post</h1>
            <hr />
            <PostForm post={post} />

            <Link to="/posts">Back to Posts</Link>
        </div>
    );
}

export default EditPost;