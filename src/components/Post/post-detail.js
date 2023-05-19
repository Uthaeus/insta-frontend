import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function PostDetail() {
    const [post, setPost] = useState({});
    const { user } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.log('post detail error: ', error));
    }, [id]);

    return (
        <div>
            <h1>Post Detail</h1>
            <hr />
            <h2>{post.content}</h2>
            <p>by {post.user?.username}</p>

            <div>
                {user.id === post.user_id && <Link to={`/posts/${id}/edit`}>Edit Post</Link>}
                <Link to="/posts">Back to Posts</Link>
            </div>
        </div>
    );
}

export default PostDetail;