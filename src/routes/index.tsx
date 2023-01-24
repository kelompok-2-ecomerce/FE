import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
