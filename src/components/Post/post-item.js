

function PostItem({post}) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.user?.username}</p>
        </div>
    );
}

export default PostItem;