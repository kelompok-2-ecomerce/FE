import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CardHome from "./CardHome";

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
      url: `https://projectfebe.online/products`,
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
          <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
