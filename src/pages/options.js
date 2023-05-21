import { useState, useContext } from 'react';

import OptionsBase from '../components/options/options-base';
import OptionsTopics from '../components/options/options-topics';
import UserInfo from '../components/options/user-info';
import EditUser from '../components/options/edit-user';
import { UserContext } from '../store/user-context';

function OptionsPage() {
    const [contentWindow, setContentWindow] = useState('base');
    const { user } = useContext(UserContext);

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

                    {user && <button className='options-menu-item' onClick={() => windowChangeHandler('edit-user')}>Edit User</button>}
                </div>

                <div className="options-content">
                    {contentWindow === 'base' && <OptionsBase />}
                    {contentWindow === 'topics' && <OptionsTopics />}
                    {contentWindow === 'user' && <UserInfo />}
                    {contentWindow === 'edit-user' && <EditUser user={user} />}
                </div>
            </div>
        </div>
    );
}

export default OptionsPage;