import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root";
import HomePage from "./pages/home";
import ErrorPage from "./components/error/error";
import OptionsPage from "./pages/options";
import AuthLayout from "./components/layouts/auth";

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
        path: "/sign_in",
        
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
