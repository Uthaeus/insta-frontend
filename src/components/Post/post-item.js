import { Link } from "react-router-dom";

function PostItem({post}) {
    return (
        <Link>
            <h2>{post.title}</h2>
            <p>{post.user?.username}</p>
        </Link>
    );
}

export default PostItem;