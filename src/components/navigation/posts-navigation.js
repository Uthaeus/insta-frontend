import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";
import { logoutHandler } from "../util/auth";

function PostsNavigation() {
    const userContext = useContext(UserContext);

    function onLogout() {
        localStorage.removeItem('insta-token');
        userContext.logout();
        logoutHandler();
    };

    return (
        <nav className="posts-nav-container">
            <ul className="posts-links-wrapper">
                <li>
                    <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/options" className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>Options</NavLink>
                </li>
                <li>
                    <NavLink to="/posts" className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>Posts</NavLink>
                </li>
                {userContext.user && (
                    <>
                        <li>
                            <NavLink to="/posts/new" className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>New Post</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' onClick={onLogout}>Sign Out</NavLink>
                        </li>
                    </>
                )}
                {!userContext.user && (
                    <>
                        <li>
                            <NavLink to="/auth/sign_in" className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>Sign In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/auth/sign_up" className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>Sign Up</NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default PostsNavigation;