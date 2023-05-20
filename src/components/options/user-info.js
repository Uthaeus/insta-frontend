import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function UserInfo() {
    const userCtx = useContext(UserContext);

    return (
        <div className="user-info">
            <h1 className="user-info-title">User Info</h1>
            <hr />
            <div className="user-info-content">
                {userCtx.user && <p className="user-info-item">Username: <span className="user-info-name">{userCtx.user.username}</span></p>}
                {userCtx.user && <p className="user-info-item">Email: <span className="user-info-email">{userCtx.user.email}</span></p>}

            </div>
        </div>
    );
}

export default UserInfo;