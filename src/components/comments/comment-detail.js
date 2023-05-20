import { useParams } from "react-router";
import { useState, useEffect } from "react";

function CommentDetail() {
    const { id } = useParams();
    const [comment, setComment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/comments/${id}`)
        .then(response => response.json())
        .then(data => setComment(data))
        .catch(error => console.log('comment error: ', error));
    }, [id]);

    console.log('comment: ', comment);

    return (
        <div className="comment-detail">
            <h1>Comment Detail</h1>
            <p>{comment.content}</p>
            <p>posted by {comment.user?.username}</p>
            <p>Post: {comment.post?.content}</p>
        </div>
    );
}

export default CommentDetail;