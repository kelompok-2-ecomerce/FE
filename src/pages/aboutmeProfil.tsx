import { useState, useEffect } from "react";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { AboutmeType } from "../utils/types/profile";
import Swal from "../utils/swal";

import ButtonLogin from "../components/buttonLogin";
import InputProfil from "../components/inputProfil";
import SideNav from "../components/sideNav";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";

import Profil from "../assets/aboutmeProfil.svg";

const aboutmeProfil = () => {
  const MySwal = withReactContent(Swal);

  const [objSubmit, setObjSubmit] = useState<AboutmeType>({});
  const [loading, setLoading] = useState<boolean>(true);

  const [photo, setPhoto] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(
        "https://virtserver.swaggerhub.com/back-end-14-alterra/sosmed/1.0.0/users"
      )
      .then((res) => {
        const { photo, name, email, phone_number } = res.data.data;
        // console.log(res.data);
        // console.log(name);
        // console.log(email);
        // console.log(phoneNumber);
        setName(name);
        setEmail(email);
        setPhoneNumber(phone_number);
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

    console.log(formData);

    axios
      .put(
        "https://virtserver.swaggerhub.com/back-end-14-alterra/sosmed/1.0.0/users",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        console.log(res.data); // console
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
    <Layout>
      <Navbar />
      <div className="flex w-full mt-5 py-7 overflow-hidden">
        <SideNav />
        <div className="flex flex-col items-center w-[60%] rounded-3xl border border-[rgba(53,91,62,0.8)] shadow-[4px_9px_20px_0px_rgba(83,83,83,0.5)] text-center p-5 pb-5 ml-28">
          <p className="text-[28px] text-[#355B3E] font-bold mb-3 ">About me</p>
          <img
            className="w-28 h-28 border-2 border-zinc-600 rounded-full "
            src={Profil}
          />

          <form onSubmit={(e) => handleSubmit(e)}>
            <table className="mt-8 mb-2 border-separate border-spacing-3 ">
              <tbody className="text-left font-bold">
                <tr>
                  <td className="pl-16">Upload Image :</td>
                  <td className="item-center  rounded-full w-[15em]">
                    <input
                      className="w-full"
                      type="file"
                      id="imgProfil"
                      name="img"
                      accept="image/*"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="pl-16">Username :</td>
                  <td className="item-center  w-[15em]">
                    <InputProfil
                      id="name"
                      type="name"
                      placeholder={name}
                      defaultValue={name}
                      onChange={(e) => handleChange(e.target.value, "name")}
                    />
                  </td>
                </tr>

                <tr>
                  <td className="pl-16">E-mail :</td>
                  <td className="item-center ">
                    <InputProfil
                      id="email"
                      type="email"
                      placeholder={email}
                      defaultValue={email}
                      onChange={(e) => handleChange(e.target.value, "email")}
                    />
                  </td>
                </tr>

                <tr>
                  <td className="pl-16">No Handphone :</td>
                  <td className="item-center ">
                    <InputProfil
                      id="phone_number"
                      type="text"
                      placeholder={phoneNumber}
                      defaultValue={phoneNumber}
                      onChange={(e) =>
                        handleChange(e.target.value, "phone_number")
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <ButtonLogin id="profil" label="Save" loading={loading} />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default aboutmeProfil;
