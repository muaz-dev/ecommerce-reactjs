import React from "react";
import Navbar from "../components/Layout/navbar";
import Footer from "../components/Layout/footer";
import Banner from "../components/Home/banner";
import Software from "../components/Home/software";
import Hardware from "../components/Home/hardware";
import Accessories from "../components/Home/accessories";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Software />
      <Hardware />
      <Accessories />

      <Footer />
    </>
  );
}

export default Home;
