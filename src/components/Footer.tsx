import React from "react";
import payment1 from "../assets/payment-1.webp";
import payment2 from "../assets/payment-2.webp";
import payment3 from "../assets/payment-3.webp";
import payment4 from "../assets/payment-4.webp";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-white text-base-content rounded mt-5">
        <h1 className="text-gray-500 font-bold  text-2xl lg:text-4xl">
          Pembayaran
        </h1>
        <div>
          <div className="grid grid-flow-col gap-4 -mt-5">
            <a>
              <img src={payment1} className="mx-auto w-36" />
            </a>
            <a>
              <img src={payment2} className="mx-auto w-36" />
            </a>
            <a>
              <img src={payment3} className="mx-auto w-36" />
            </a>
            <a>
              <img src={payment4} className="mx-auto w-36 mt-2" />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Greenish Media</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
