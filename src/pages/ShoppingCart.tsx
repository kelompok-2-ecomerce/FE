import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

import { TbShoppingCart } from "react-icons/tb";
import pic1 from "../assets/pic-1.webp";

import Footer from "../components/Footer";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [jumlahBarang, setJumlahBarang] = useState(1);

  function countBarangPlus() {
    setJumlahBarang((prevState) => prevState + 1);
  }

  function countBarangMinus() {
    setJumlahBarang(jumlahBarang - 1);
  }
  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col overflow-auto bg-white">
          <Navbar />
          <div className="flex flex-col md:flex-row ">
            <div className="flex-1 mt-10 p-14 lg:p-0 ">
              <img src={pic1} className="mx-auto w-full lg:w-3/5 rounded-3xl" />
            </div>

            <div className="flex-1 mt-14">
              <h1 className="text-black font-bold text-3xl lg:text-4xl pl-14 lg:pl-0 -mt-16 lg:-mt-0">
                Shoes Max, Naiki
              </h1>
              <p className="text-black font-bold text-3xl pl-14 lg:pl-0 mt-5 lg:mt-5 ">
                $299,99
              </p>
              <div className="pl-10 lg:pl-1">
                <button
                  className="btn bg-green-700 border-none text-white hover:bg-green-600 rounded-full pl-8 pr-8 mt-10"
                  onClick={() => navigate("/transaksi")}
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-shopping-cart"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0m13 0m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0m2 -2h-11v-14h-2m2 2l14 1l-1 7h-13"></path>
                  </svg> */}

                  <span className="pl-3">Checkout</span>
                </button>
              </div>
            </div>

            <div className="flex-1 -mt-14 lg:mt-0 p-10 lg:p-0">
              <div className="flex flex-row mt-7 ">
                <p className="mt-10 font-bold text-xl mr-4">Qty:</p>
                <div className="btn-group mt-8">
                  {jumlahBarang === 1 ? (
                    <button
                      disabled
                      className="btn"
                      onClick={() => countBarangMinus()}
                    >
                      -
                    </button>
                  ) : (
                    <button className="btn" onClick={() => countBarangMinus()}>
                      -
                    </button>
                  )}

                  <button className="btn">{jumlahBarang}</button>
                  <button className="btn" onClick={() => countBarangPlus()}>
                    +
                  </button>
                </div>
              </div>
              <p className="font-bold text-xl mt-5">Sub Total: $200</p>
              <button className="btn bg-white mt-5 border-green-700 text-green-700 border-2 hover:text-white hover:bg-green-600 hover:border-green-600 rounded-xl pl-8 pr-8">
                Remove
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="flex-1 mt-10 p-14 lg:p-0 ">
              <img src={pic1} className="mx-auto w-full lg:w-3/5 rounded-3xl" />
            </div>

            <div className="flex-1 mt-14">
              <h1 className="text-black font-bold text-3xl lg:text-4xl pl-14 lg:pl-0 -mt-16 lg:-mt-0">
                Shoes Max, Naiki
              </h1>
              <p className="text-black font-bold text-3xl pl-14 lg:pl-0 mt-5 lg:mt-5 ">
                $299,99
              </p>
              <div className="pl-10 lg:pl-1">
                <button className="btn bg-green-700 border-none text-white hover:bg-green-600 rounded-full pl-8 pr-8 mt-10">
                  <TbShoppingCart />

                  <span className="pl-3">Checkout</span>
                </button>
              </div>
            </div>
            <div className="flex-1 -mt-14 lg:mt-0 p-10 lg:p-0">
              <div className="flex flex-row mt-7 ">
                <p className="mt-10 font-bold text-xl mr-4">Qty:</p>
                <div className="btn-group mt-8">
                  {jumlahBarang === 1 ? (
                    <button
                      disabled
                      className="btn"
                      onClick={() => countBarangMinus()}
                    >
                      -
                    </button>
                  ) : (
                    <button className="btn" onClick={() => countBarangMinus()}>
                      -
                    </button>
                  )}

                  <button className="btn">{jumlahBarang}</button>
                  <button className="btn" onClick={() => countBarangPlus()}>
                    +
                  </button>
                </div>
              </div>
              <p className="font-bold text-xl mt-5">Sub Total: $200</p>
              <button className="btn bg-white mt-5 border-green-700 text-green-700 border-2 hover:text-white hover:bg-green-600 hover:border-green-600 rounded-xl pl-8 pr-8">
                Remove
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default ShoppingCart;
