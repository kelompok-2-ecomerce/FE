import React from "react";
import Layout from "../components/layout";
import pic1 from "../assets/pic-1.webp";
import { useState } from "react";
import payment1 from "../assets/payment-1.webp";
import payment2 from "../assets/payment-2.webp";
import payment3 from "../assets/payment-3.webp";
import payment4 from "../assets/payment-4.webp";

export default function DetailBarang() {
  const [jumlahBarang, setJumlahBarang] = useState(0);

  function countBarangPlus() {
    setJumlahBarang((prevState) => prevState + 1);
  }

  function countBarangMinus() {
    setJumlahBarang(jumlahBarang - 1);
  }
  return (
    <>
      <Layout>
        <div className="w-full h-screen">
          <div className="flex flex-col md:flex-row">
            <div className="image flex-1 p-5 lg:p-10 mt-10">
              <img src={pic1} className="mx-auto w-full lg:w-3/5 rounded-3xl" />
            </div>
            <div className="image flex-1  mt-5 lg:mt-20 p-5 lg:p-1">
              <h1 className="text-black font-bold text-4xl">
                Shoes Max, Naiki
              </h1>
              <p className="text-black font-medium text-lg mt-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
              <h1 className="text-black font-bold text-3xl mt-5">$299,99</h1>
              <div className="btn-group mt-8">
                {jumlahBarang === 0 ? (
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
              <div className="flex flex-rows gap-5 mt-7">
                <button className="btn bg-green-700 border-none text-white hover:bg-green-600 rounded-full pl-8 pr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-building-store"
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
                    <path d="M3 21l18 0m-18 -14v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4m-16 14l0 -10.15m14 10.15l0 -10.15m-10 10.15v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                  </svg>
                  <span className="pl-3">Buy Now</span>
                </button>
                <button className="btn bg-white border-green-700 text-green-700 border-2 hover:text-white hover:bg-green-600 hover:border-green-600 rounded-full pl-8 pr-8">
                  <svg
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
                  </svg>
                  <span className="pl-3">Add To Cart</span>
                </button>
              </div>
              <div className="flex flex-col">
                <div className="flex-1 mt-10">
                  <h1 className="text-3xl font-bold text-slate-600">
                    Pembayaran
                  </h1>
                </div>
                <div className="flex-1 mt-10">
                  <div className="grid grid-cols-4 float-left gap-4 -mt-5">
                    <a>
                      <img src={payment1} className="mx-auto w-28" />
                    </a>
                    <a>
                      <img src={payment2} className="mx-auto w-28" />
                    </a>
                    <a>
                      <img src={payment3} className="mx-auto w-28" />
                    </a>
                    <a>
                      <img src={payment4} className="mx-auto w-28 mt-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
