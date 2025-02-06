import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy Load Components
const Home = lazy(() => import("@/components/Home/Home"));
const ErrorPage = lazy(() => import("@/components/Shared/ErrorPage"));
const Login = lazy(() => import("@/components/Utilities/Login"));
const Main = lazy(() => import("@/Layout/Main"));

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
    element: Loadable(Main),
    errorElement: Loadable(ErrorPage),
    children: [
      {
        path: "/",
        element: Loadable(Home),
      },
      {
        path: "/login",
        element: Loadable(Login),
      },
    ],
  },
]);
