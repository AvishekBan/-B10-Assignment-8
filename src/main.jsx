import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Statistics from "./Components/Statistics/Statistics";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element:<Home></Home>

        },

        {
          path:'statistics',
          element:<Statistics></Statistics>  
        },

        {
          path: 'dashboard',
          element:<Dashboard></Dashboard>
        }

      ]
   },
]);


createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
