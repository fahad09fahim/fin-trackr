import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "@/components/Shared/ErrorPage";
import Main from "@/Layout/Main";
import Login from "@/components/Utilities/Login";
import Signup from "@/components/Utilities/Signup";

// Lazy Load Components
const Home = lazy(() => import("@/components/Home/Home"));

// Suspense Wrapper Function
const Loadable = (Component) => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    }
  >
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: Loadable(Home),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
