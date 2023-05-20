import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import OptionsBase from '../components/options/options-base';
import OptionsTopics from '../components/options/options-topics';

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
                    <NavLink onClick={() => windowChangeHandler('topics')} className={({isActive}) => isActive ? 'options-menu-item options-menu-item-active' : 'options-menu-item'}>Topics</NavLink>
                </div>

                <div className="options-content">
                    {contentWindow === 'base' && <OptionsBase />}
                    {contentWindow === 'topics' && <OptionsTopics />}
                </div>
            </div>
        </div>
    );
}

export default OptionsPage;