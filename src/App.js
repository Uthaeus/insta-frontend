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
  }
]);

function App() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem("insta-token");
    if (token && token !== "undefined" && !userCtx.user) {
      fetch("http://localhost:4000/users_current", {
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
        userCtx.login(data.status.data);
      })
      .catch(error => console.log('user current error: ', error));
    }
  }, [userCtx]);
  return <RouterProvider router={router} />;
}

export default App;
