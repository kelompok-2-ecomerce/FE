import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { useCookies } from "react-cookie";
import axios from "axios";

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
import EditProduk from "../pages/EditProduk";

axios.defaults.baseURL = "https://projectfebe.online/";

function App() {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  axios.interceptors.request.use(function (config) {
    config.headers = config.headers ?? {};
    config.headers.Authrization = `Bearer ${checkToken}`;
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeCookie("token");
      }
      return Promise.reject(error);
    }
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/profilUpload",
      element: checkToken ? <ProfilUpload /> : <Navigate to="/login" />,
    },
    {
      path: "/profilProduk",
      element: checkToken ? <ProfilProduk /> : <Navigate to="/login" />,
    },
    {
      path: "/aboutmeProfil",
      element: checkToken ? <AboutmeProfil /> : <Navigate to="/login" />,
    },
    {
      path: "/aboutmeAlamat",
      element: checkToken ? <AboutmeAlamat /> : <Navigate to="/login" />,
    },
    {
      path: "/transaksi",
      element: checkToken ? <Transaksi /> : <Navigate to="/login" />,
    },
    {
      path: "/register",
      element: checkToken ? <Navigate to="/login" /> : <Register />,
    },
    {
      path: "/login",
      element: checkToken ? <Navigate to="/profilProduk" /> : <Login />,
    },
    {
      path: "/detailBarang/:id",
      element: <DetailBarang />,
    },
    {
      path: "/editProduk/:id",
      element: <EditProduk />,
    },
    {
      path: "/deactivate",
      element: <DeactivateAcc />,
    },

    {
      path: "/shoppingCart",
      element: <ShoppingCart />,
    },
    {
      path: "*",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
