import { Link } from "react-router-dom";

function HomePostItem({ post }) {

    function truncate(str) {
        return str.length > 40 ? str.substring(0, 40) + '...' : str + '...';
    }

    return (
        <Link to={`/posts/${post.id}`} className="home-post-item-container">
            <div className="home-post-item-image" style={{
                backgroundImage: `url(http://localhost:4000${post.image.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '200px',
                width: '100%',
            }} />
            <h3 className="home-post-item-title">{truncate(post.content)}</h3>
            <p className="home-post-item-author">Posted by: <span className="home-post-item-author-span">{post.user?.username}</span></p>
        </Link>
    );
}

export default HomePostItem;