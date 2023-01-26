import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import Swal from "../../utils/swal";
import { handleAuth } from "../../utils/redux/reducer/reducer";

import ButtonRegister from "../../components/buttonRegister";
import ButtonLogin from "../../components/buttonLogin";
import Layout from "../../components/Layout";
import Input from "../../components/input";

import imgLogin from "../../assets/imgLogin.svg";
import logoApp from "../../assets/logoApp.svg";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setCookie] = useCookies(["token"]);

  const MySwal = withReactContent(Swal);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };

    axios
      .post("https://projectfebe.online/login", body)
      .then((res) => {
        const { data, message } = res.data;

        setCookie("token", data.token, { path: "/" });
        dispatch(handleAuth(true));
        MySwal.fire({
          title: "Succes",
          text: message,
          showCancelButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex mt-10 w-[80vw] h-[80vh] overflow-hidden bg-zinc-50 rounded-2xl shadow-[0px_50px_40px_-30px_rgba(83,83,83,0.8)] ">
          <div className="flex flex-col items-center w-[50%] h-full bg-[#F5DBC4]">
            <div className="w-8/12 h-6/12 overflow-hidden mt-[66px] ">
              <img src={imgLogin} alt="imgLogin.svg" />
              <p className="text-[20px] text-[#58745E] text-center mt-10 leading-5">
                Enter your personal details and start journey with us
              </p>
              <div className=" mt-8 text-center">
                <ButtonRegister
                  label="Sign Up"
                  onClick={() => navigate("/register")}
                />
              </div>
            </div>
          </div>

          <div className="w-[50%] h-full flex justify-center overflow-hidden">
            <div className="w-8/12 h-full py-5 ">
              <Link to="/">
                <img className="ml-auto w-32" src={logoApp} alt="logoApp.svg" />
              </Link>
              <p className="text-[28px] text-center font-bold text-[#58745E] mt-5">
                Log in
              </p>
              <p className="text-[14px] text-center text-[#58745E] pb-4 border-dashed border-b-2 border-[#58745E]">
                Login to make an post, access your profile, experience special,
                and more
              </p>
              <div className=" mt-10 px-7">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <p className="font-bold text-[#58745E] mb-1">Email</p>

                  <Input
                    id="email"
                    type="email"
                    placeholder="budijoko@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <p className="font-bold text-[#58745E] mt-5 mb-1">Password</p>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className=" mt-8 text-center">
                    <ButtonLogin
                      id="login"
                      label="Login"
                      loading={loading || disabled}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
