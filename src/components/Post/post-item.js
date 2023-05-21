import { Link } from "react-router-dom";

function PostItem({post, user}) {
    let postImage = `http://localhost:4000/${post.image?.url}`;
    console.log('post item post: ', post);

    function shortenContent(content) {
        if (content.length > 50) {
            return `${content.slice(0, 50)}...`;
        }
        return content + '...';
    }

    function likeHandler() {
        console.log('like handler');

        let dataToSend = {
            like: {
                user_id: user.id,
                post_id: post.id,
                comment_id: null
            }
        };

        // POST /posts/:post_id/likes(.:format) likes#create
        // POST /comments/:comment_id/likes(.:format) likes#create
        // POST   /likes(.:format) likes#create
        
        fetch(`http://localhost:4000/likes`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            console.log('like data: ', data);
        })
        .catch(error => console.log('like error: ', error));
    }

    return (
        <div className="post-item-wrapper">
            <div className="post-item-content-wrapper">
            <Link to={`/posts/${post.id}`}><img className="post-item-img" src={postImage} alt={post.content} width='100%' height='250px' /></Link>
                <p className="post-item-content">{shortenContent(post.content)}</p>
            </div>
            <i className="bi bi-suit-heart-fill post-item-like-btn" onClick={likeHandler}></i>

            <p className="post-item-user">posted by: <span className="post-item-user-span">{post.user?.username}</span></p>
        </div>
    );
}

export default PostItem;