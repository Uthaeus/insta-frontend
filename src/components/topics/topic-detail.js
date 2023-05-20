import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PostCommentItem from '../comments/post-comment-item';
import PostItem from '../Post/post-item';

function TopicDetail() {
    const [topic, setTopic] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/topics/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('topic detail data:', data);
                setTopic(data);
            })
            .catch(error => console.log('topic detail error:', error));
    }, [id]);

    return (
        <div className="topic-detail">
            <h1 className="topic-detail-title">{topic.title}</h1>
            <hr />

            <div className="topic-detail-content">
                <div className="topic-detail-content-user-info-wrapper">
                    <h4 className="topic-detail-content-user-info-title">User Info</h4>
                    <p className="topic-detail-content-user-info-item">Username: <span className="topic-detail-content-user-info-name">{topic.user && topic.user.username}</span></p>
                    <p className="topic-detail-content-user-info-item">Email: <span className="topic-detail-content-user-info-email">{topic.user && topic.user.email}</span></p>
                </div>

                <div className="topic-detail-content-user-comments-wrapper">
                    <h4 className="topic-detail-content-user-comments-title">Comments</h4>
                    {topic.user.comments && topic.user.comments.map(comment => <PostCommentItem key={comment.id} comment={comment} />)}
                </div>

                <div className="topic-detail-content-user-posts-wrapper">
                    <h4 className="topic-detail-content-user-posts-title">Posts</h4>
                    {topic.user.posts && topic.user.posts.map(post => <PostItem key={post.id} post={post} />)}
                </div>
            </div>

            <Link to="/options" className="topic-detail-back">Back</Link>
        </div>
    );
}

export default TopicDetail;