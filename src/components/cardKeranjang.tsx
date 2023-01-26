import { useNavigate } from "react-router-dom";
import { FC, useState } from "react";

import { TbShoppingCart } from "react-icons/tb";

interface cardProps {
  product_id?: number;
  name?: string;
  image?: any;
  harga?: number;
  qty?: number;
  total_harga?: number;
}

const CardKeranjang: FC<cardProps> = ({
  product_id,
  name,
  image,
  harga,
  qty,
  total_harga,
}) => {
  const navigate = useNavigate();
  const [jumlahBarang, setJumlahBarang] = useState(1);

  function countBarangPlus() {
    setJumlahBarang((prevState) => prevState + 1);
  }

  function countBarangMinus() {
    setJumlahBarang(jumlahBarang - 1);
  }

  function onClikTransaksi() {
    navigate(`/transaksi/${product_id}`);
  }

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex-1 mt-10 p-14 lg:p-0 ">
        <img src={image} className="mx-auto w-full lg:w-3/5 rounded-3xl" />
      </div>

      <div className="flex-1 mt-14">
        <h1 className="text-black font-bold text-3xl lg:text-4xl pl-14 lg:pl-0 -mt-16 lg:-mt-0">
          {name}
        </h1>
        <p className="text-black font-bold text-3xl pl-14 lg:pl-0 mt-5 lg:mt-5 ">
          {harga}
        </p>
        <div className="pl-10 lg:pl-1">
          <button
            className="btn bg-green-700 border-none text-white hover:bg-green-600 rounded-full pl-8 pr-8 mt-10"
            onClick={() => onClikTransaksi()}
          >
            <TbShoppingCart className="w-6 h-6" />
            <span className="pl-3">Checkout</span>
          </button>
        </div>
      </div>
      <div className="flex-1 -mt-14 lg:mt-0 p-10 lg:p-0">
        <div className="flex flex-row mt-7 ">
          <p className="mt-10 font-bold text-xl mr-4">{`Qty : ${qty}`}</p>
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
        <p className="font-bold text-xl mt-5">
          {`Sub Total: Rp.${total_harga} `}{" "}
        </p>
        <button className="btn bg-white mt-5 border-green-700 text-green-700 border-2 hover:text-white hover:bg-green-600 hover:border-green-600 rounded-xl pl-8 pr-8">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CardKeranjang;
