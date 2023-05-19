import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";
import { logoutHandler } from "../util/auth";

function MainNavigation() {
    const userCtx = useContext(UserContext);

    function onLogout() {
        userCtx.logout();
        logoutHandler();
    };


    return (
        <nav className="main-nav-container">
            <div className="main-nav-links-wrapper">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Home</NavLink>
                <NavLink to="/options" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Options</NavLink>
                <NavLink to="/posts" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Posts</NavLink>
            </div>

            <div className="main-nav-title-wrapper">
                <p className="background-shade" />
                <p className="main-nav-title">Welcome, {userCtx.user ? userCtx.user.username : 'dude'}</p>
            </div>

            <div className="main-auth-links-wrapper">
                {userCtx.user && <p className="nav-link" onClick={onLogout}>Sign Out</p>}

                {!userCtx.user && (
                    <>
                        <NavLink to="/auth/sign_in" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Sign In</NavLink>
                        <NavLink to="/auth/sign_up" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Sign Up</NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}

export default MainNavigation;