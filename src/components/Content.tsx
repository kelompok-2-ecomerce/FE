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

interface DataCart {
  product_id?: number;
}

const Content = () => {
  const [post, setPost] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputTask, setInputTask] = useState<DataCart>({});

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

  // const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   const body = {
  //     content: inputTask,
  //   };

  //   axios
  //     .post(`https://projectfebe.online/carts/${product_id}`, body)
  //     .then((res) => {
  //       alert("Add to Cart");
  //     })
  //     .catch((err) => {
  //       const { message } = err.response.data;
  //       alert(message);
  //     })
  //     .finally(() => setLoading(false));
  // };

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
