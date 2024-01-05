import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layouts
import Layout from "./layouts/Layout.tsx";

//pages
import Home from "./pages/home/Home.tsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: "properties",
        //   element: <Property />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
