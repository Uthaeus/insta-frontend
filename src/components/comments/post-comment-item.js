import { Link } from "react-router-dom";

function PostCommentItem({ comment }) {

  return (
    <Link to={`/posts/comments/${comment.id}`} className="comment-item">
      <p className="comment-text">
        {comment.content}
      </p>
        <p className="comment-author">
            posted by <span>{comment.user?.username}</span>
        </p>
    </Link>
  )
}

export default PostCommentItem;