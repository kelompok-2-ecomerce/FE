import PhoneImg from "../assets/phoneImg.svg";

const Table = () => {
  return (
    <table className="mt-5 w-full bg-zinc-100 py-5">
      <tbody className="py-5">
        <tr className="text-zinc-600 text-[14px]">
          <td className="w-[50%]">Produk yang dipesan</td>
          <td className="w-[17%]">Harga Satuan</td>
          <td className="text-center">Jumlah</td>
          <td className="pl-24 text-zinc-800 font-bold">Subtotal Produk</td>
        </tr>
        <tr className=" text-[14px]">
          <td className="flex leading-9 gap-4">
            <img src={PhoneImg} alt="PhoneImg.svg" />
            <p>
              <span className="font-bold">Galaxy Solusindo </span> <br />
              HP xiamoi redmi 15 Note ++++
            </p>
          </td>
          <td className="text-start">Rp 12.000.000</td>
          <td className="text-center">1</td>
          <td className="pl-24">Rp 12.000.000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
