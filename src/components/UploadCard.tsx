import React from "react";
import pic1 from "../assets/pic-1.webp";

export default function UploadCard() {
  return (
    <>
      <div className="md:w-10/12 mt-10 ">
        <figure>
          <img src={pic1} className="mx-auto rounded-3xl shadow-lg" />
        </figure>
        <div className="flex flex-row justify-between mt-4">
          <div>
            <h2 className="text-green-700 font-bold text-lg">
              Shoes Max, Naiki
            </h2>
          </div>
          <div>
            <p className="text-green-700 font-semibold text-md">$22,99</p>
          </div>
        </div>
        <button className="btn bg-green-700 border-none text-white font-semibold mt-3 rounded-xl hover:bg-green-900">
          Add To cart
        </button>
      </div>
    </>
  );
}
