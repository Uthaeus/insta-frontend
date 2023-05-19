import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function PostDetail() {
    const [post, setPost] = useState({});
    const { user } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();

    let postImage = `http://localhost:4000/${post.image?.url}`;
    let createdAgo = (Date.now() - Date.parse(post.created_at)) / 1000 / 60 / 60 / 24;

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.log('post detail error: ', error));
    }, [id]);

    function deletePostHandler() {
        let token = localStorage.getItem('insta-token');

        fetch(`http://localhost:4000/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.ok) {
                navigate('/posts');
                return response.json();
            }
        })
        .catch(error => console.log('delete post error: ', error));
    }

    return (
        <div className="post-detail-container">
            <div className="post-detail-main-wrapper">
                <img className="post-detail-img" src={postImage} alt={post.content} />
                <hr />
                <div className="detail-body-wrapper">
                    <div className="detail-content-wrapper">
                        <p>by {post.user?.username} {createdAgo >= 1 ? `${Math.round(createdAgo)} days` : createdAgo * 24 >= 1 ? `${Math.round(createdAgo * 24)} hours` : createdAgo * 24 * 60 >= 1 ? `${Math.round(createdAgo * 24 * 60)} minutes` : `${Math.round(createdAgo * 24 * 60 * 60)} seconds` } ago.</p>
                        <h2>{post.content}</h2>
                    </div>

                    <div className="post-detail-links-wrapper">
                        {(user?.id === post.user_id || user?.role === 'site_admin') && (
                        <>
                            <Link to={`/posts/${id}/edit`} className="detail-btn edit"><i className="bi bi-pencil-square"></i></Link>
                            <Link className="detail-btn delete" onClick={deletePostHandler}><i className="bi bi-trash3"></i></Link>
                        </>
                        )}
                        <Link to="/posts" className="post-detail-link">Back to Posts</Link>
                    </div>
                </div>

                <div className="post-detail-comment-form-wrapper">
                    { user && (
                        <p className="temp-comment-form"></p>
                    )}
                    
                </div>
            </div> 

            <div className="post-detail-comments-wrapper">
            <h3 className="post-detail-comments-title">Comments</h3>
                <hr />
                <div className="post-detail-comments">

                </div>
            </div>
        </div>
    );
}

export default PostDetail;