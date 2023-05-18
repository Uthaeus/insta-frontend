import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";

function AuthLayout() {
    
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    );
}

export default AuthLayout;