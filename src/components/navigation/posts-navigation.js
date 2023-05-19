import { NavLink } from "react-router-dom";
import { useContext } from "react";

import logoImage from "../../assets/images/logo.png";

import { UserContext } from "../../store/user-context";
import { logoutHandler } from "../util/auth";

function PostsNavigation() {
    const userContext = useContext(UserContext);

    function onLogout() {
        logoutHandler();
        
        userContext.logout();
    };

    return (
        <nav className="posts-nav-container">
            <div className="posts-nav-logo-wrapper" style={{
                backgroundImage: `url(${logoImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} />

            <div className="posts-links-wrapper">
                
                <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>Home</NavLink>
            
                <NavLink to="/options" className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>Options</NavLink>
            
                <NavLink to="/posts" className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>Posts</NavLink>
                
                {userContext.user && (
                    <>
                        <NavLink to="/posts/new" className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>New Post</NavLink>

                        <NavLink className='nav-link' onClick={onLogout}>Sign Out</NavLink>
                    </>
                )}
                {!userContext.user && (
                    <>
                        <NavLink to="/auth/sign_in" className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>Sign In</NavLink>

                        <NavLink to="/auth/sign_up" className={({isActive}) => isActive ? 'nav-link active-link' : 'nav-link'}>Sign Up</NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}

export default PostsNavigation;