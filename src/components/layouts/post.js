import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";

function PostLayout() {
    return (
        <div>
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default PostLayout;