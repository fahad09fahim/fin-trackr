import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "@/components/Shared/ErrorPage";

// Lazy Load Components
const Home = lazy(() => import("@/components/Home/Home"));

const Login = lazy(() => import("@/components/Utilities/Login"));
const Main = lazy(() => import("@/Layout/Main"));
const SignUp = lazy(() => import("@/components/Utilities/Signup"));

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

    children: [
      {
        path: "/",
        element: Loadable(Home),
      },
      {
        path: "/login",
        element: Loadable(Login),
      },
      {
        path: "/signup",
        element: Loadable(SignUp),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
