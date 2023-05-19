import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../store/user-context';
import PostItem from './post-item';
import PostForm from './post-form';
import PostMinForm from './post-min-form';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [formSize, setFormSize] = useState('min');
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log('posts error: ', error));
    }, []);

    function expandForm() {
        if (formSize === 'max') {
            return;
        }
        let element = document.querySelector('.right-column');

        if (formSize === 'mid') {
            setFormSize('max');
            element.style.width = '1050px';
        } else if (formSize === 'min') {
            setFormSize('mid');
            element.style.width = '450px';
        }


    }

    function shrinkForm() {
        if (formSize === 'min') {
            return;
        }

        let element = document.querySelector('.right-column');

        if (formSize === 'mid') {
            setFormSize('min');
            element.style.width = '90px';
        } else if (formSize === 'max') {
            setFormSize('mid');
            element.style.width = '450px';
        }
    }

    return (
        <div className='posts-container'>
            <div className='left-column'>
                <div className='posts-header'>
                    <h1>Posts</h1>
                    <hr />
                </div>

                <div className='posts-list-wrapper'>
                    {posts.map(post => <PostItem key={post.id} post={post} />)}
                </div>
            </div>

            <div className='right-column'>
                {formSize === 'min' && <PostMinForm expandForm={expandForm} />}
                {formSize !== 'min' && (
                    <>
                        <div className='posts-form-wrapper'>
                            <PostForm />

                        </div>
                        <div className='posts-form-actions'>
                            <button onClick={expandForm}>Expand</button>
                            <button onClick={shrinkForm}>Shrink</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Posts;