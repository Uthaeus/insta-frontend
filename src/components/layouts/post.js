import { Outlet } from "react-router";

import PostsNavigation from "../navigation/posts-navigation";

function PostLayout() {
    return (
        <div className="post-layout-container">
            <PostsNavigation />
            <Outlet />
        </div>
    );
}

export default PostLayout;