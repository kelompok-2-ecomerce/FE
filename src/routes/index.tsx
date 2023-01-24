import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/App";
import Login from "../pages/auth/login";
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
