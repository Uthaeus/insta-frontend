import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function UserInfo() {
    const userCtx = useContext(UserContext);

    let username = userCtx.user ? userCtx.user.username : 'Guest';
    let email = userCtx.user ? userCtx.user.email : 'GuestMail';
    let links = userCtx.user ? userCtx.user.links : [];

    console.log('userCtx', userCtx);

    return (
        <div className="user-info">
            <h1 className="user-info-title">User Info</h1>
            <hr />
            <div className="user-info-content">
                <p className="user-info-item">Username: <span className="user-info-name">{username}</span></p>
                <p className="user-info-item">Email: <span className="user-info-email">{email}</span></p>

            </div>

            <div className="user-info-links">
                <h5 className="user-info-links-title">Links:</h5>
                <ul className="user-info-links-list">
                    {links?.map((link, index) => {
                        return (
                            <li className="user-info-links-list-item" key={index}>
                                <a href={link.url} target="_blank" rel="noreferrer">{link.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default UserInfo;