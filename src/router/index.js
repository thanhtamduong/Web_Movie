import DetailMovie from "../page/Detail";
import Home from "../page/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../page/Register";
import Login from "../page/Login";

const { useRoutes, Navigate } = require("react-router-dom");

const Router = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/details/:maPhim",
          element: <DetailMovie />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return element;
};
export default Router;
