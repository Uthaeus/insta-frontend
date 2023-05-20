import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import OptionsBase from '../components/options/options-base';
import OptionsTopics from '../components/options/options-topics';
import UserInfo from '../components/options/user-info';

function OptionsPage() {
    const [contentWindow, setContentWindow] = useState('base');

    function windowChangeHandler(window) {
        setContentWindow(window);
    }

    return (
        <div className="options-container">
            <h1 className="options-title">Options</h1>
            <hr />

            <div className='options-content-wrapper'>
                <div className="options-menu">
                    <button onClick={() => windowChangeHandler('base')} className='options-menu-item'>Base</button>
                    <button onClick={() => windowChangeHandler('topics')} className='options-menu-item'>Topics</button>
                    <button onClick={() => windowChangeHandler('user')} className='options-menu-item'>User</button>
                </div>

                <div className="options-content">
                    {contentWindow === 'base' && <OptionsBase />}
                    {contentWindow === 'topics' && <OptionsTopics />}
                    {contentWindow === 'user' && <UserInfo />}
                </div>
            </div>
        </div>
    );
}

export default OptionsPage;