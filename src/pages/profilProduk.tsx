import CardHome from "../components/CardHome";
import Layout from "../components/layout";
import pic2 from "../assets/pic-2.webp";

const ProfilProduk = () => {
  return (
    <Layout>
      <div className="flex w-full bg-[#355B3E] mt-7 py-6 px-28 gap-4">
        <img
          className="rounded-full w-24 h-24 border-2 border-zinc-50"
          src="https://placeimg.com/80/80/people"
          alt="propfilLogo.html"
        />
        <p className="inline text-[30px] text-zinc-50 font-bold leading-[96px]">
          Dianna Puspitasari
        </p>
      </div>
      <div className="flex w-full pl-28 mt-10 mb-10">
        <p className="px-5 py-1 text-[18px] text-[#355B3E] font-bold">Upload</p>
        <p className="inline ml-10 px-5 py-1 text-[18px] text-[#355B3E] font-bold border-b border-[#355B3E]">
          Produk
        </p>
      </div>

      <div className="w-full min-h-screen flex justify-center px-5 pb-20">
        <div className="w-full grid grid-cols-4   gap-2 px-6">
          <CardHome image={pic2} title={"Shoes Max, Naiki"} price={"$22,99"} />
          <CardHome image={pic2} title={"Shoes Max, Naiki"} price={"$22,99"} />
          <CardHome image={pic2} title={"Shoes Max, Naiki"} price={"$22,99"} />
          <CardHome image={pic2} title={"Shoes Max, Naiki"} price={"$22,99"} />
          <CardHome image={pic2} title={"Shoes Max, Naiki"} price={"$22,99"} />
        </div>
      </div>
    </Layout>
  );
};

export default ProfilProduk;
