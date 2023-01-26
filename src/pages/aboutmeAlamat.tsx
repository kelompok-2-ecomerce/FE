import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import withReactContent from "sweetalert2-react-content";
import { AboutmeType } from "../utils/types/profile";
import Swal from "../utils/swal";

import ButtonLogin from "../components/buttonLogin";
import SideNav from "../components/sideNav";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";

const AboutmeAlamat = () => {
  const MySwal = withReactContent(Swal);
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [objSubmit, setObjsubmit] = useState<AboutmeType>({});
  const [loading, setLoading] = useState<boolean>(true);

  const [photo, setPhoto] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("https://projectfebe.online/users", {
        headers: { Authorization: `Bearer ${checkToken}` },
      })
      .then((res) => {
        const { address, photo } = res.data.data;
        // console.log(address);
        setPhoto(photo);
        setAddress(address);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setLoading(false));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }

    axios
      .put("https://projectfebe.online/users", formData, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { message } = res.data;
        console.log(res.data);
        MySwal.fire({
          title: "Edis Succesfull",
          text: message,
          showCancelButton: false,
        });
        setObjsubmit({});
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
    setObjsubmit(temp);
  };

  return (
    <Layout>
      <Navbar />
      <div className="flex w-full mt-5 py-7 overflow-hidden">
        <SideNav />
        <div className="flex flex-col items-center w-[60%] rounded-3xl border border-[rgba(53,91,62,0.8)] shadow-[4px_9px_20px_0px_rgba(83,83,83,0.5)] text-center p-5 pb-10 ml-28">
          <p className="text-[36px] text-[#355B3E] font-bold mb-3 ">About Me</p>
          <img
            className="w-28 h-28 border-2 border-zinc-600 rounded-full "
            src={photo}
          />

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="w-[30rem] mt-8 mb-8">
              <p className="text-start font-bold mb-5 ">Daftar Alamat :</p>
              <textarea
                className="textarea w-full textarea-bordered pb-5"
                id="addres"
                typeof="text"
                placeholder={address}
                defaultValue={address}
                onChange={(e) => handleChange(e.target.value, "address")}
              ></textarea>
            </div>

            <ButtonLogin id="btn-submit" label="Save" loading={loading} />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AboutmeAlamat;
