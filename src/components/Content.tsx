import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CardHome from "./CardHome";
import Card from "./CardHome";
import pic1 from "../assets/pic-1.webp";
import pic2 from "../assets/pic-2.webp";
import pic3 from "../assets/pic-3.webp";
import pic4 from "../assets/pic-4.webp";
import pic5 from "../assets/pic-5.webp";
import pic6 from "../assets/pic-6.webp";
import pic7 from "../assets/pic-7.webp";
import pic8 from "../assets/pic-8.webp";
import pic9 from "../assets/pic-9.webp";
import pic10 from "../assets/pic-10.webp";
import pic11 from "../assets/pic-11.webp";
import pic12 from "../assets/pic-12.webp";
import pic13 from "../assets/pic-13.webp";

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

const Content = () => {
  const [post, setPost] = useState<CardProps[]>([]);

  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url: "https://projectfebe.online/products",
      headers: {},
      params: {},
    })
      .then((response) => {
        const ApiResponse = response.data;
        console.log("response", ApiResponse);
        setPost(ApiResponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      {/* test */}
      <div className="w-full min-h-screen flex justify-center mt-10 ">
        <div className="w-10/12 ">
          <h1 className="text-green-700 font-bold text-2xl">
            | Best Seller Products
          </h1>
          <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </div>
    </>
  );
};

export default Content;
