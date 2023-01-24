import React, { FC } from "react";
import { useNavigate } from "react-router";

interface CardProps {
  title: string;
  price: string;
  image?: string;
}

const CardHome: FC<CardProps> = ({ title, price, image }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/detailBarang`);
  }
  return (
    <>
      <div className="md:w-11/12 mt-10 ">
        <figure>
          <div className="w-full">
            <img
              src={image}
              className="mx-auto rounded-3xl shadow-lg lg:h-72 lg:w-full"
              onClick={() => onClickDetail()}
            />
          </div>
        </figure>
        <div className="flex flex-row justify-between mt-4">
          <div>
            <h2 className="text-green-700 font-bold text-lg">{title}</h2>
          </div>
          <div>
            <p className="text-green-700 font-semibold text-md">{price}</p>
          </div>
        </div>
        <button className="btn bg-green-700 border-none text-white font-semibold mt-3 rounded-xl hover:bg-green-900">
          Add To cart
        </button>
      </div>
    </>
  );
};

export default CardHome;
