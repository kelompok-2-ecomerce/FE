import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/layout";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </>
  );
};

export default Homepage;
