import { FaMapMarkerAlt } from "react-icons/fa";

import ButtonRegister from "../components/buttonRegister";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import Table from "../components/table";

const Transaksi = () => {
  return (
    <Layout>
      <div className="flex justify-center w-full">
        <div className="w-[80vw] py-7">
          <p className="text-[20px] font-bold text-[#355B3E] -ml-4">Checkout</p>

          <table className="mt-7 w-full">
            <tbody>
              <tr className="p-5">
                <td className="text-[#355B3E] text-[16px] font-bold w-[40%] pb-3">
                  <FaMapMarkerAlt className="inline w-6 h-6 pb-1" />
                  <span className="pl-1 text-end">Alamat Pengiriman</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="font-bold text-zinc-800 text-[14px] leading-7">
                  M Agung Cahya D <br /> 089567864490
                </td>
                <td className="text-zinc-800 text-[14px] leading-7 tracking-wider">
                  Jl. Nusantara No.1 Kebomas, Garum, Kab.Blitar - Jawa TImur, ID
                  35464 ( Seberang Pom bensin kebomas, warna rumah cat hijau
                  pagar hitam )
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-[#355B3E] mt-8">
            Pro
            <span className="underline decoration-[#355B3E] decoration-2 underline-offset-8">
              duk Dipesan
            </span>
          </p>

          <Table />

          <div className="w-full text-right mt-28   ">
            <p className="inline">Total Pembayaran :</p>
            <p className="inline pl-8 text-[#355B3E] font-bold text-[18px]">
              Rp. 12.000.000
            </p>
            <br />
            <ButtonRegister
              className="w-44 h-10 rounded-xl bg-[#355B3E] text-zinc-50 mt-8"
              label="Buat Pesanan"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Transaksi;