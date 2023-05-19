import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../store/user-context';
import PostItem from './post-item';
import PostForm from './post-form';

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
        <div className='posts-container'>
            <div className='posts-header'>
                <h1>Posts</h1>
                {user && <Link to="/posts/new">Create New Post</Link>}
            </div>

            <div className='posts-content-container posts-content-columns-51'>
                <div className='posts-list-wrapper list-wrapper-width-full'>

                    {posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>

                <div className='posts-form-wrapper'>
                    <PostForm />
                </div>
            </div>

        </div>
    );
}

export default Posts;