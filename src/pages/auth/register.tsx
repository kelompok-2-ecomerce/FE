import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/swal";

import ButtonRegister from "../../components/buttonRegister";
import ButtonLogin from "../../components/buttonLogin";
import Layout from "../../components/layoutDasar";
import Input from "../../components/input";

import imgLogin from "../../assets/imgLogin.svg";
import logoApp from "../../assets/logoApp.svg";

const Register = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [disable, setDisable] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (name && email && password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      name,
      email,
      password,
    };

    axios
      .post("https://projectfebe.online/register", body)
      .then((res) => {
        const { data, message } = res.data;
        MySwal.fire({
          title: "Succes",
          text: message,
          showCancelButton: false,
        });

        navigate("/login");
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex mt-10 w-[80vw] h-[80vh] overflow-hidden bg-zinc-50 rounded-2xl shadow-[0px_50px_40px_-30px_rgba(83,83,83,0.8)] ">
          <div className="w-[50%] h-full flex justify-center overflow-hidden">
            <div className="w-8/12 h-full py-5 ">
              <Link to="/">
                <img className="mr-auto w-32" src={logoApp} alt="logoApp.svg" />
              </Link>
              <p className="text-[28px] text-center font-bold text-[#58745E] mt-4">
                Create Account
              </p>
              <p className="text-[14px] text-[#58745E] ">
                Create your Account and Enjoy Together
              </p>
              <div className=" mt-5 px-7">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <p className="font-bold text-[#58745E] mb-1">Name</p>

                  <Input
                    id="name"
                    type="text"
                    placeholder="Budi Joko"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <p className="font-bold text-[#58745E] mt-3 mb-1">Email</p>
                  <Input
                    id="email"
                    type="email"
                    placeholder="budijoko@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <p className="font-bold text-[#58745E] mt-3 mb-1">Password</p>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className=" mt-5 text-center">
                    <ButtonLogin
                      id="btn-login"
                      label="Register"
                      loading={loading || disable}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-[50%] h-full bg-[#F5DBC4]">
            <div className="w-8/12 h-6/12 overflow-hidden mt-[66px] ">
              <img src={imgLogin} alt="imgLogin.svg" />
              <p className="text-[20px] text-[#58745E] text-center mt-10 leading-5">
                To keep connected with us please login with your personal info
              </p>
              <div className=" mt-8 text-center">
                <ButtonRegister
                  label="Sign In"
                  onClick={() => navigate("/login")}
                  // loading = {loa}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
