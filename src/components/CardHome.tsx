import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

interface CardProps {
  id: number;
  name: string;
  harga: number;
  stok: number;
  description: string;
  image: string;
  address: string;
  penjual: string;
}

const CardHome: FC<CardProps> = ({
  id,
  name,
  harga,
  stok,
  description,
  image,
  address,
  penjual,
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/detailBarang/${id}`);
  }

  return (
    <>
      <div className="md:w-11/12 mt-10 ">
        <figure>
          <div className="w-full">
            <div className="badge hidden border-none bg-green-700 lg:p-3 lg:z-1 lg:mt-4 lg:ml-36  lg:absolute text-white">
              Stok : {stok}
            </div>
            <img
              src={image}
              className="mx-auto rounded-3xl shadow-lg lg:h-72 lg:w-full"
              onClick={() => onClickDetail()}
            />
          </div>
        </figure>
        <div className="flex flex-row justify-between mt-4">
          <div>
            <h2 className="text-green-700 font-bold text-lg">{name}</h2>
            <p className="hidden">{id}</p>

            <div className="collapse">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                <p className="font-bold text-lg">See Details</p>
              </div>
              <div className="collapse-content">
                <p>{description}</p>
                <p>{address}</p>
                <p>{penjual}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-green-700 font-semibold text-md">{harga}</p>
          </div>
        </div>
        <button className="btn bg-green-700 border-none text-white font-semibold mt-3 rounded-xl hover:bg-green-900">
          <Link to="/shoppingCart">Add To cart</Link>
        </button>
      </div>
    </>
  );
};

export default CardHome;
