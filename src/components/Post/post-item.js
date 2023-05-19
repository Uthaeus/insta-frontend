import { Link } from "react-router-dom";

function PostItem({post}) {
    let postImage = `http://localhost:4000/${post.image?.url}`;

    function shortenContent(content) {
        if (content.length > 50) {
            return `${content.slice(0, 50)}...`;
        }
        return content + '...';
    }

    return (
        <Link to={`/posts/${post.id}`} className="post-item-wrapper">
            <div className="post-item-content-wrapper">
                <img src={postImage} alt={post.content} width='100%' height='250px' />
                <p className="post-item-content">{shortenContent(post.content)}</p>
            </div>
            <p className="post-item-user">posted by: <span className="post-item-user-span">{post.user?.username}</span></p>
        </Link>
    );
}

export default PostItem;