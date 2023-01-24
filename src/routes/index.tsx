import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/App";
import Login from "../pages/auth/login";
import DeactivateAcc from "../pages/DeactivateAcc";
import DetailBarang from "../pages/DetailBarang";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
