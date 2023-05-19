import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../store/user-context';
import PostItem from './post-item';

function Posts() {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log('posts error: ', error));
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {user && <Link to="/posts/new">Create New Post</Link>}
            <hr />

            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}

        </div>
    );
}

export default Posts;