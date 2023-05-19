import { Link } from "react-router-dom";

function PostItem({post}) {
    let postImage = `http://localhost:4000/${post.image?.url}`;

    return (
        <Link to={`/posts/${post.id}`}>
            <img src={postImage} alt={post.content} width='200px' height='250px' />
            <p>{post.user?.username}</p>
        </Link>
    );
}

export default PostItem;