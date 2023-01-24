import { RiShieldUserFill } from "react-icons/ri";
import { RiMapPin5Fill } from "react-icons/ri";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";

const sideNav = () => {
  return (
    <div className="w-2/12 h-[45vh] py-10 pl-5 border rounded-r-2xl border-[rgba(53,91,62,0.8)] shadow-[3px_4px_5px_0px_rgba(83,83,83,0.5)]">
      <div className="flex">
        <RiShieldUserFill className="w-6 h-6 text-[#355B3E]" />
        <p className="border-l-2 font-bold text-[14px] text-[#355B3E] border-[#355B3E] ml-2 pl-2">
          Profil
        </p>
      </div>

      <div className="flex mt-8">
        <RiMapPin5Fill className="w-6 h-6 text-[#355B3E]" />
        <p className="border-l-2 font-bold text-[14px] text-[#355B3E] border-[#355B3E] ml-2 pl-2">
          Alamat
        </p>
      </div>

      <div className="flex mt-8">
        <RiShoppingCart2Fill className="w-6 h-6 text-[#355B3E]" />
        <p className="border-l-2 font-bold text-[14px] text-[#355B3E] border-[#355B3E] ml-2 pl-2">
          Keranjang Saya
        </p>
      </div>

      <div className="flex mt-8">
        <FaTrashAlt className="w-5 h-5 text-[#355B3E]" />
        <p className="border-l-2 font-bold text-[14px] text-[#355B3E] border-[#355B3E] ml-2 pl-2 ">
          Delete Account
        </p>
      </div>
    </div>
  );
};

export default sideNav;
