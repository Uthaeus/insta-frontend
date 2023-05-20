import { useState, useEffect } from 'react';

import TopicItem from '../comments/topics/topic-item';

function OptionsTopics() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/topics')
            .then(response => response.json())
            .then(data => setTopics(data))
            .catch(error => console.log('options topics error:', error));
    }, []);

    return (
        <div className="options-topics">
            <h1 className="options-topics-title">Topics</h1>
            <hr />

            <div className="options-topics-content">
                {topics.map(topic => <TopicItem key={topic.id} topic={topic} />)}
            </div>
        </div>
    );
}

export default OptionsTopics;