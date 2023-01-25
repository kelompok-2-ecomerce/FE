import ButtonLogin from "../components/buttonLogin";
import InputProfil from "../components/inputProfil";
import SideNav from "../components/sideNav";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";

import Profil from "../assets/aboutmeProfil.svg";

const AboutmeAlamat = () => {
  return (
    <Layout>
      <Navbar />
      <div className="flex w-full mt-5 py-7 overflow-hidden">
        <SideNav />
        <div className="flex flex-col items-center w-[60%] rounded-3xl border border-[rgba(53,91,62,0.8)] shadow-[4px_9px_20px_0px_rgba(83,83,83,0.5)] text-center p-5 pb-10 ml-28">
          <p className="text-[36px] text-[#355B3E] font-bold mb-3 ">About Me</p>
          <img
            className="w-28 h-28 border-2 border-zinc-600 rounded-full "
            src={Profil}
          />

          <div className="w-[30rem] mt-8 mb-8">
            <p className="text-start font-bold mb-5 ">Daftar Alamat :</p>

            <textarea
              className="textarea w-full textarea-bordered pb-5"
              placeholder="Jl. Nusantara No.1 Kebomas, Garum, Kab.Blitar - Jawa TImur, ID 35464 ( Seberang Pom bensin kebomas, warna rumah cat hijau pagar hitam )"
            ></textarea>
          </div>

          <ButtonLogin id="btn-submit" label="Save" />
        </div>
      </div>
    </Layout>
  );
};

export default AboutmeAlamat;
