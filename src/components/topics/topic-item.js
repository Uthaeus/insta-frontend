import { Link } from 'react-router-dom';

function TopicItem({ topic }) {
    return (
        <Link to={`/topics/${topic.id}`} className="topic-item">
            <h3 className="topic-item-title">{topic.title}</h3>
        </Link>
    )
}

export default TopicItem;