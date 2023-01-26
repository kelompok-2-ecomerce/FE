import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../components/layout";
import withReactContent from "sweetalert2-react-content";

import Navbar from "../components/Navbar";
import { useCookies } from "react-cookie";

interface CardProps {
  id?: number;
  name?: string;
  harga?: number;
  stok?: number;
  description?: string;
  image?: string;
}

export interface editProduk {
  image?: any;
  name?: string;
  harga?: string;
  stok?: string;
  description?: number;
}

export default function DetailBarang() {
  const { id } = useParams();
  const MySwal = withReactContent(Swal);
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [data, setData] = useState<CardProps | null>(null);
  const [objSubmit, setObjSubmit] = useState<editProduk>({});
  const [name, setName] = useState<string>("");
  const [stok, setStok] = useState<string>("");
  const [harga, setHarga] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function fetchData() {
    axios({
      method: "GET",
      url: `https://projectfebe.online/products/${id}`,
      headers: {
        Authorization: `Bearer ${checkToken}`,
      },
      params: {},
    })
      .then((res) => {
        const { image, name, harga, stok, description } = res.data.data;
        // console.log(res.data);
        console.log(image);
        console.log(name);
        console.log(harga);
        console.log(stok);
        console.log(description);

        setImage(image);
        setName(name);
        setHarga(harga);
        setStok(stok);
        setDescription(description);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }

    console.log(formData);

    axios
      .put(`https://projectfebe.online/products/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { message } = res.data;
        console.log(res.data);
        MySwal.fire({
          title: "Edit Succesfull",
          text: message,
          showCancelButton: false,
        });
        setObjSubmit({});
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Edit Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => fetchData());
  };

  const handleChange = (value: string | File, key: keyof typeof objSubmit) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col overflow-auto bg-white">
          <Navbar />

          <div className="flex w-full px-10 py-5 mb-16">
            <div className="w-[30%] px-14 pt-6">
              <img
                className="w-[240px] h-[300px] rounded-2xl"
                alt="uploadImage"
                src={image}
              />
              <input
                type="file"
                onChange={(e) => {
                  if (!e.currentTarget.files) {
                    return;
                  }

                  setImage(URL.createObjectURL(e.currentTarget.files[0]));
                  handleChange(e.currentTarget.files[0], "image");
                }}
              />
            </div>
            <div className="w-[70%] px-5">
              <p className="text-[18px] text-zinc-900 font-bold">
                Keterangan Produk :
              </p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="flex mt-8">
                  <p className="w-48 leading-[45px]">
                    Nama Produk <span className="ml-14">:</span>
                  </p>
                  <input
                    className="w-[60%] border border-zinc-700 p-2 rounded-xl"
                    id="name"
                    type="name"
                    placeholder={name}
                    defaultValue={name}
                    onChange={(e) => handleChange(e.target.value, "name")}
                  />
                </div>

                <div className="flex mt-5">
                  <p className="w-48 leading-[45px]">
                    Harga Produk <span className="ml-14">:</span>
                  </p>
                  <input
                    className="w-[60%] border border-zinc-700 p-2 rounded-xl"
                    id="input_name"
                    type="number"
                    placeholder={harga}
                    onChange={(e) => handleChange(e.target.value, "harga")}
                  />
                </div>
                <div className="flex mt-5">
                  <p className="w-48 leading-[45px]">
                    Stok <span className="ml-14">:</span>
                  </p>
                  <input
                    className="w-[60%] border border-zinc-700 p-2 rounded-xl"
                    id="input_name"
                    type="number"
                    placeholder={stok}
                    onChange={(e) => handleChange(e.target.value, "stok")}
                  />
                </div>

                <div className="flex mt-5">
                  <p className="w-48 leading-[45px]">
                    Deskripsi Produk <span className="ml-9">:</span>
                  </p>
                  <textarea
                    className="textarea w-[60%] textarea-bordered pb-5 border-zinc-700"
                    placeholder={description}
                    onChange={(e) => handleChange(e.target.value, "stok")}
                  ></textarea>
                </div>
                <div className="w-[84%] text-right mt-10">
                  <button className="w-40 h-12 rounded-xl bg-[#007549] text-[16px] text-zinc-50">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
