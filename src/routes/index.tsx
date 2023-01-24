import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import DeactivateAcc from "../pages/DeactivateAcc";
import DetailBarang from "../pages/DetailBarang";

import Homepage from "../pages/App";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/detailBarang",
      element: <DetailBarang />,

    },
    {
      path: "/deactivate",
      element: <DeactivateAcc />,
      },
      
      {
      path: "/register",
      element: <Register />,
      }, 

  ]);

  return <RouterProvider router={router} />;
}

export default App;
