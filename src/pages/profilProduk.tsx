import { Link, useParams } from "react-router-dom";

import CardHome from "../components/CardHome";
import Layout from "../components/Layout";

import avatar from "../assets/avatar.webp";
import Navbar from "../components/Navbar";
import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

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

const ProfilProduk = () => {
  const [post, setPost] = useState<CardProps[]>([]);

  const [, setCookie] = useCookies(["token"]);
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url: `https://projectfebe.online/myproducts`,
      headers: {
        Authorization: `Bearer ${checkToken}`,
      },
      params: {},
    })
      .then((response) => {
        const ApiResponse = response.data;
        // alert("response", ApiResponse);
        setPost(ApiResponse.data);

        useEffect(() => {
          fetchData();
        }, [fetchData]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Layout>
      <Navbar />
      <div className="flex w-full bg-[#355B3E] mt-7 py-6 px-28 gap-4">
        <img
          className="rounded-full w-24 h-24 border-2 border-zinc-50"
          src={avatar}
          alt="propfilLogo.html"
        />
        <p className="inline text-[30px] text-zinc-50 font-bold leading-[96px]">
          Welcome Back Greener
        </p>
      </div>
      <div className="flex w-full pl-28 mt-10 mb-10">
        <p className="px-5 py-1 text-[18px] text-[#355B3E] font-bold">
          <Link to="/profilUpload"> Upload </Link>
        </p>
        <p className="inline ml-10 px-5 py-1 text-[18px] text-[#355B3E] font-bold border-b border-[#355B3E]">
          <Link to="/profilProduk"> Produk </Link>
        </p>
      </div>

      <div className="w-full min-h-screen flex justify-center px-5 pb-20">
        <div className="w-full grid grid-cols-3   gap-2 px-6">
          {post.map((item, idx) => {
            return (
              <CardHome
                key={idx}
                id={item.id}
                image={item.image}
                name={item.name}
                harga={item.harga}
                description={item.description}
                stok={item.stok}
                address={item.address}
                penjual={item.penjual}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilProduk;
