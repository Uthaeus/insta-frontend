import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function PostDetail() {
    const [post, setPost] = useState({});
    const { user } = useContext(UserContext);
    const { id } = useParams();

    let postImage = `http://localhost:4000/${post.image?.url}`;
    let createdAgo = (Date.now() - Date.parse(post.created_at)) / 1000 / 60 / 60 / 24;

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.log('post detail error: ', error));
    }, [id]);

    return (
        <div>
            <img src={postImage} alt={post.content} />
            <hr />
            <h2>{post.content}</h2>
            <p>by {post.user?.username} {createdAgo >= 1 ? `${Math.round(createdAgo)} days` : createdAgo * 24 >= 1 ? `${Math.round(createdAgo * 24)} hours` : createdAgo * 24 * 60 >= 1 ? `${Math.round(createdAgo * 24 * 60)} minutes` : `${Math.round(createdAgo * 24 * 60 * 60)} seconds` } ago.</p>

            <div>
                {user.id === post.user_id && <Link to={`/posts/${id}/edit`}>Edit Post</Link>}
                <Link to="/posts">Back to Posts</Link>
            </div>
        </div>
    );
}

export default PostDetail;