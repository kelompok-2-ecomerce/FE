import { Link, useNavigate } from "react-router-dom";

import Layout from "../../components/layout";
import imgLogin from "../../assets/imgLogin.svg";
import logoApp from "../../assets/logoApp.svg";
import Input from "../../components/input";
import ButtonRegister from "../../components/buttonRegister";
import ButtonLogin from "../../components/buttonLogin";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex mt-10 w-[80vw] h-[80vh] overflow-hidden bg-zinc-50 rounded-2xl shadow-[0px_50px_40px_-30px_rgba(83,83,83,0.8)] ">
          <div className="w-[50%] h-full flex justify-center overflow-hidden">
            <div className="w-8/12 h-full py-5 ">
              <Link to="/register">
                <img className="mr-auto w-32" src={logoApp} alt="logoApp.svg" />
              </Link>
              <p className="text-[28px] text-center font-bold text-[#58745E] mt-4">
                Create Account
              </p>
              <p className="text-[14px] text-[#58745E] ">
                Create your Account and Enjoy Together
              </p>
              <div className=" mt-5 px-7">
                <p className="font-bold text-[#58745E] mb-1">Name</p>

                <Input id="input" type="e-mail" placeholder="Budi Joko" />

                <p className="font-bold text-[#58745E] mt-3 mb-1">Email</p>
                <Input
                  id="input"
                  type="e-mail"
                  placeholder="budijoko@gmail.com"
                />

                <p className="font-bold text-[#58745E] mt-3 mb-1">Password</p>
                <Input
                  id="input-password"
                  type="password"
                  placeholder="Password"
                />
                <div className=" mt-5 text-center">
                  <ButtonLogin
                    id="btn-login"
                    label="Login"
                    // loading = {loa}
                  />
                </div>
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
