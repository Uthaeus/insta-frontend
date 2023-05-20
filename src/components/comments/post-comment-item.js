import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { UserContext } from "../../store/user-context";
import CommentCommentForm from "./post-comment-form";

function PostCommentItem({ comment }) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const { user } = useContext(UserContext);

  function commentReplyHandler() {
    let element = document.querySelector('.comment-reply-wrapper');

    if (!showReplyForm === false) {
      element.classList.add('comment-form-hide');
      element.classList.remove('comment-form-show');
    } else {
      element.classList.add('comment-form-show');
      element.classList.remove('comment-form-hide');
    }

    setShowReplyForm(!showReplyForm);
  }

  return (
    <div className="comment-item">
      <Link to={`/posts/comments/${comment.id}`} className="comment-text">
        {comment.content}
      </Link>
      <div className="comment-footer">
        <p className="comment-reply-btn" onClick={commentReplyHandler}>
          {showReplyForm ? 'close form' : 'reply'}
        </p>
        <p className="comment-author">
            posted by <span className="comment-author-span">{comment.user?.username}</span>
        </p>
      </div>
      <div className="comment-reply-wrapper">
        <CommentCommentForm user_id={user.id} comment_id={comment.id} post_id={comment.post_id} />
      </div>
    </div>
  )
}

export default PostCommentItem;