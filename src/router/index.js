import DetailMovie from "../page/Detail";
import Home from "../page/Home";
import MainLayout from "../layout/MainLayout";

const { useRoutes } = require("react-router-dom");

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
      element: <></>,
    },
    {
      path: "/login",
      element: <></>,
    },
  ]);
  return element;
};
export default Router;
