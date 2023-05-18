import { NavLink } from "react-router-dom";

function MainNavigation() {

    return (
        <nav className="main-nav-container">
            <div>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Home</NavLink>
                <NavLink to="/options" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Options</NavLink>
            </div>

            <div>
                Logo/Title
            </div>

            <div>
                auth links
            </div>
        </nav>
    );
}

export default MainNavigation;