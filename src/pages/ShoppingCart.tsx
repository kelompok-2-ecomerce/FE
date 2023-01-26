import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import CardKeranjang from "../components/cardKeranjang";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import axios from "axios";

interface dataType {
  product_id?: number;
  name?: string;
  image?: any;
  harga?: number;
  qty?: number;
  total_harga?: number;
}

const ShoppingCart = () => {
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [datas, setDatas] = useState<dataType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(
        "https://virtserver.swaggerhub.com/back-end-14-alterra/sosmed/1.0.0/carts",
        {
          headers: { Authorization: `Bearer ${checkToken}` },
        }
      )
      .then((res) => {
        setDatas(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col overflow-auto bg-white">
          <Navbar />
          <div className="flex flex-col">
            {datas.map((data) => (
              <CardKeranjang
                key={data.product_id}
                image={data.image}
                name={data.name}
                qty={data.qty}
                harga={data.harga}
                total_harga={data.total_harga}
              />
            ))}
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default ShoppingCart;
