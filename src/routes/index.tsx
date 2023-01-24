import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import AboutmeProfil from "../pages/aboutmeProfil";
import AboutmeAlamat from "../pages/aboutmeAlamat";
import DeactivateAcc from "../pages/DeactivateAcc";
import ProfilProduk from "../pages/profilProduk";
import DetailBarang from "../pages/DetailBarang";
import ProfilUpload from "../pages/profilUpload";
import ShoppingCart from "../pages/ShoppingCart";
import Register from "../pages/auth/register";
import Transaksi from "../pages/transaksi";
import Login from "../pages/auth/login";
import Homepage from "../pages/App";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/profilUpload",
      element: <ProfilUpload />,
    },
    {
      path: "/profilProduk",
      element: <ProfilProduk />,
    },
    {
      path: "/aboutmeProfil",
      element: <AboutmeProfil />,
    },
    {
      path: "/aboutmeAlamat",
      element: <AboutmeAlamat />,
    },
    {
      path: "/transaksi",
      element: <Transaksi />,
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
      path: "/shoppingCart",
     element: <ShoppingCart />,
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
