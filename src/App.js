import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useContext } from "react";

import RootLayout from "./components/layouts/root";
import HomePage from "./pages/home";
import ErrorPage from "./components/error/error";
import OptionsPage from "./pages/options";
import AuthLayout from "./components/layouts/auth";
import SignIn from "./components/auth/sign-in";
import SignUp from "./components/auth/sign-up";
import { UserContext } from "./store/user-context";
import PostLayout from "./components/layouts/post";
import Posts from "./components/Post/posts";
import NewPost from "./components/Post/new-post";
import PostDetail from "./components/Post/post-detail";
import EditPost from "./components/Post/edit-post";
import CommentDetail from "./components/comments/comment-detail";
import TopicDetail from "./components/topics/topic-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/options",
        element: <OptionsPage />
      },
      {
        path: "/topics/:id",
        element: <TopicDetail />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth/sign_in",
        element: <SignIn />
      },
      {
        path: "/auth/sign_up",
        element: <SignUp />
      }
    ]
  },
  {
    path: "/posts",
    element: <PostLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />
      },
      {
        path: "/posts/new",
        element: <NewPost />
      },
      {
        path: "/posts/:id",
        element: <PostDetail />
      },
      {
        path: "/posts/:id/edit",
        element: <EditPost />
      },
      {
        path: "/posts/comments/:id",
        element: <CommentDetail />
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

function App() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem("insta-token");
    if (token && token !== "undefined" && !userCtx.user) {
      fetch("http://localhost:4000/user_current", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        userCtx.login(data);
      })
      .catch(error => console.log('user current error: ', error));
    }
  }, [userCtx]);
  return <RouterProvider router={router} />;
}

export default App;
