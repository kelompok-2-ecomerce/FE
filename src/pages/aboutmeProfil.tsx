import ButtonLogin from "../components/buttonLogin";
import InputProfil from "../components/inputProfil";
import SideNav from "../components/sideNav";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";

import Profil from "../assets/aboutmeProfil.svg";

const aboutmeProfil = () => {
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
                    id="input_name"
                    type="name"
                    placeholder="Budi Joko"
                  />
                </td>
              </tr>
              <tr>
                <td className="pl-16">E-mail :</td>
                <td className="item-center ">
                  <InputProfil
                    id="input_email"
                    type="email"
                    placeholder="budijoko@gmail.com"
                  />
                </td>
              </tr>
              <tr>
                <td className="pl-16">No Handphone :</td>
                <td className="item-center ">
                  <InputProfil
                    id="input_noHp"
                    type="text"
                    placeholder="089566877890"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <ButtonLogin id="btn-submit" label="Save" />
        </div>
      </div>
    </Layout>
  );
};

export default aboutmeProfil;
