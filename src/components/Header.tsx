import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-8/12  h-52 flex justify-center mt-10">
          <div className="bg-image rounded-3xl shadow-lg">
            <h1 className="md:text-3xl font-bold text-green-700 pl-14 md:pl-20 pt-10">
              Get The discount 50% off <br />
              For Selected Products
            </h1>
            <button className="btn bg-green-700 border-none text-white ml-20 mt-4">
              <Link to="/detailBarang">Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
