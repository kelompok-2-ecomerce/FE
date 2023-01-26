import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, FC } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { handleAuth } from "../utils/redux/reducer/reducer";
import Swal from "../utils/swal";

import avatar from "../assets/avatar.webp";
import trolley from "../assets/trolley.webp";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const handleLogout = async () => {
    removeCookie("token");
    dispatch(handleAuth(false));
    navigate("/login");
    MySwal.fire({
      title: "Log out Account",
      text: "You have been logged out",
      showCancelButton: false,
    });
  };

  return (
    <>
      <div className="navbar sticky top-0 bg-white shadow-md p-5">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl md:ml-24"
            style={{
              color: "#007549",
              fontFamily: "Poppins",
              fontWeight: "700",
            }}
          >
            Greenish
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle mr-7">
              <div className="indicator">
                <img src={trolley} />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <div className="card-actions">
                  <button className="btn bg-green-700 border-none btn-block">
                    <Link to="/shoppingCart">View cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end md:pr-24">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} className="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profilUpload" className="justify-between">
                  Profile
                  <span className="badge">Account</span>
                </Link>
              </li>

              <li>
                <Link to="/aboutmeProfil">About Me</Link>
              </li>
              <li>
                <button
                  onClick={() =>
                    checkToken ? handleLogout() : navigate("/login")
                  }
                >
                  {checkToken ? "Log out" : "Log in"}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    checkToken ? navigate("/deactivate") : navigate("/login")
                  }
                >
                  {checkToken ? "Deactivate Account" : ""}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
