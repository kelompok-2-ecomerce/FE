import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import { useCookies } from "react-cookie";
import avatar from "../assets/avatar.webp";
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
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [post, setPost] = useState<CardProps[]>([]);
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/detailBarang/${id}`);
  }

  function onClickEdit() {
    navigate(`/editProduk/${id}`);
  }

  const handleDeleteProduct = async (id: Number) => {
    try {
      await axios.delete(`https://projectfebe.online/products/${id}`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      });
      if (window.confirm("Are You Sure want to delete this products?")) {
        setPost((prevPost) => prevPost.filter((item) => item.id !== id));
        localStorage.setItem(
          "products",
          JSON.stringify(post.filter((item) => item.id !== id))
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="md:w-11/12 mt-10 ">
        <div className="w-10 rounded-full flex flex-row mb-4">
          <img src={avatar} className="" />
          <h1 className="font-bold ml-4">{penjual}</h1>
        </div>

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
            <h2 className="text-green-700 font-bold text-lg">{name}</h2>
            <div className="badge bg-green-700 border-none p-">
              Stok : {stok}
            </div>

            <p className="hidden">{id}</p>

            <div className="collapse">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                <p className="font-bold text-lg">See Details</p>
              </div>
              <div className="collapse-content">
                <div>
                  <p>Alamat : {address}</p>
                  <p>Deskripsi Produk : {description}</p>
                </div>
                <div className="flex flex-row">
                  <button
                    className="mt-5 font-semibold underline"
                    onClick={() => onClickEdit()}
                  >
                    Edit
                  </button>
                  <button
                    className="mt-5 ml-4 font-semibold underline"
                    onClick={() => handleDeleteProduct(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-green-700 font-semibold text-md">
              Rp. {harga},-
            </p>
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
