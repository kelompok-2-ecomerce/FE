import React from "react";
import CardHome from "./CardHome";
import Card from "./CardHome";
import pic1 from "../assets/pic-1.webp";
import pic2 from "../assets/pic-2.webp";
import pic3 from "../assets/pic-3.webp";
import pic4 from "../assets/pic-4.webp";
import pic5 from "../assets/pic-5.webp";
import pic6 from "../assets/pic-6.webp";
import pic7 from "../assets/pic-7.webp";
import pic8 from "../assets/pic-8.webp";
import pic9 from "../assets/pic-9.webp";
import pic10 from "../assets/pic-10.webp";
import pic11 from "../assets/pic-11.webp";
import pic12 from "../assets/pic-12.webp";
import pic13 from "../assets/pic-13.webp";

const Content = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center mt-10 ">
        <div className="w-10/12 ">
          <h1 className="text-green-700 font-bold text-2xl">
            | Best Seller Products
          </h1>
          <div className="md:grid grid-cols-4  grid-flow-col gap-4">
            <div>
              <CardHome
                image={pic1}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
            <div>
              <CardHome
                image={pic2}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
            <div>
              <CardHome
                image={pic3}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
            <div>
              <CardHome
                image={pic4}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen flex justify-center mt-10 lg:-mt-20">
        <div className="w-10/12 ">
          <h1 className="text-green-700 font-bold text-2xl">
            | Best Seller Products
          </h1>
          <div className="md:grid grid-cols-4  grid-flow-col gap-4">
            <div>
              <CardHome
                image={pic5}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
            <div>
              <CardHome
                image={pic6}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
            <div>
              <CardHome
                image={pic7}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
            <div>
              <CardHome
                image={pic8}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
          </div>
          <div className="md:grid grid-cols-4  grid-flow-col gap-4">
            <div>
              <CardHome
                image={pic9}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
            <div>
              <CardHome
                image={pic10}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
            <div>
              <CardHome
                image={pic11}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
            <div>
              <CardHome
                image={pic12}
                title={"Shoes Max, Naiki"}
                price={"$22,99"}
              />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="btn-group">
              <button className="btn">«</button>
              <button className="btn">Page 1</button>
              <button className="btn">»</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
