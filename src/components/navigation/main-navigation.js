import { NavLink } from "react-router-dom";

function MainNavigation() {

    const logoutHandler = () => {
        console.log('logout');
    };

    return (
        <nav className="main-nav-container">
            <div className="main-nav-links-wrapper">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Home</NavLink>
                <NavLink to="/options" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Options</NavLink>
            </div>

            <div className="main-nav-title-wrapper">
                <p className="background-shade" />
                <p className="main-nav-title">Great Logo</p>
            </div>

            <div className="main-auth-links-wrapper">
                <NavLink to="/auth/sign_in" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Sign In</NavLink>
                <NavLink to="/auth/sign_up" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Sign Up</NavLink>
                <p className="nav-link" onClick={logoutHandler}>Sign Out</p>
            </div>
        </nav>
    );
}

export default MainNavigation;