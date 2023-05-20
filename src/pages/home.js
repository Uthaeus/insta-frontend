import { useState, useEffect } from "react";

import HomePostItem from "../components/home/home-post-item";

function HomePage() {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/home')
        .then(response => response.json())
        .then(data => setRecentPosts(data))
        .catch(error => console.log('welcome error: ', error));
    }, []);

    return (
        <div className="homepage-container">
            <div className="homepage-header">
                <h1>Home Page</h1>
                <p>Sign up or Sign in to post</p>
            </div>

            <div className="homepage-list">
                {recentPosts.map(post => <HomePostItem key={post.id} post={post} />)}
            </div>
        </div>
    );
}

export default HomePage;