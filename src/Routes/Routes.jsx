import { createBrowserRouter } from "react-router-dom";

import Home from "@/components/Home/Home";
import ErrorPage from "@/components/Shared/ErrorPage";
import Login from "@/components/Utilities/Login";
import Main from "@/Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
