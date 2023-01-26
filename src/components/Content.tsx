import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CardHome from "./CardHome";
import { slice } from "lodash";

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
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(3);
  const initialPost = slice(post, 0, index);

  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url: `https://projectfebe.online/products`,
      headers: {},
      params: {},
    })
      .then((response) => {
        const ApiResponse = response.data;
        // alert("response", ApiResponse);
        setPost(ApiResponse.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const loadMore = () => {
    setIndex(index + 6);

    if (index >= post.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center mt-10 ">
        <div className="w-10/12 ">
          <h1 className="text-green-700 font-bold text-2xl">
            | Best Seller Products
          </h1>
          <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {initialPost.map((item, idx) => {
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
          {isCompleted ? (
            <div className="flex justify-center">
              <button
                className="btn btn-wide bg-green-700 border-none mt-10 btn-wide"
                disabled
              >
                Load More
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                className="btn btn-wide bg-green-700 border-none mt-10"
                onClick={loadMore}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Content;
