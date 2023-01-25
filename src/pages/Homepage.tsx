import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col overflow-auto bg-white">
          <Navbar />
          <Header />
          <Content />
          <Footer />
        </div>
      </Layout>
    </>
  );
};

export default Homepage;
