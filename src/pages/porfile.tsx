import React from "react";
import Layout from "../components/Layout";

function Profile() {
  const h1Style = "text-2xl text-green-700 font-bold my-5";
  const h2Style = "text-xl text-green-500 font-bold my-4";
  const pStyle = "text-base text-slate-700 my-2";
  return (
    <Layout>
      <div className="max-w-screen-md mx-auto my-8">
        <h1 className={` border-b-4 pb-5 ${h1Style}`}>Defa</h1>
        <h2 className={h2Style}>About Us</h2>
        <p className={pStyle}>
          At Defa, we are committed to driving innovation and excellence in the
          world of information technology. Founded in 2023 by a team of
          passionate technology enthusiasts, we have rapidly evolved into a
          leading provider of comprehensive IT solutions. Our core expertise
          lies in offering top-notch software, cutting-edge hardware, and a wide
          range of IT accessories designed to meet the ever-changing needs of
          businesses and individuals alike.
        </p>
        <h2 className={h2Style}>Our Mission</h2>
        <p className={pStyle}>
          Our mission is to empower our clients by providing them with reliable,
          high-quality IT products and services. We strive to be a one-stop
          destination for all technology needs, ensuring that our clients stay
          ahead in a digitally driven world.
        </p>
        <h2 className={h2Style}>Our Products and Services</h2>
        <ul>
          <li>
            Software Solutions: From bespoke software development to
            off-the-shelf software products, we cater to various business needs.
            Our software offerings include enterprise resource planning (ERP)
            systems, customer relationship management (CRM) tools, and much
            more.
          </li>
          <li>
            Hardware Products: We supply a broad range of hardware products,
            including but not limited to, high-performance computers, servers,
            networking devices, and storage solutions. Our hardware portfolio is
            carefully curated to ensure quality, durability, and performance.
          </li>
          <li>
            IT Accessories: Complementing our software and hardware line, we
            offer a diverse collection of IT accessories. This includes
            peripherals like keyboards, mice, monitors, as well as essential
            components like graphics cards, motherboards, and RAM modules.
          </li>
        </ul>
        <h2 className={h2Style}>Our Commitment to Quality</h2>
        <p className={pStyle}>
          Quality is at the heart of everything we do. We partner with leading
          manufacturers and employ stringent quality control measures to ensure
          that all our products meet the highest standards.
        </p>
        <h2 className={h2Style}>Customer-Centric Approach</h2>
        <p className={pStyle}>
          Understanding and meeting our customers' needs is our top priority. We
          offer personalized consultations, after-sales support, and tailored
          solutions to ensure customer satisfaction.
        </p>

        <h2 className={h2Style}>Contact Us</h2>
        <p className={pStyle}>Email: contact@defa.com</p>
        <p className={` mt-5 border-t-4 ${pStyle}`}>
          Join us at Defa, where technology meets excellence, and discover how
          we can help you transform your IT infrastructure.
        </p>
      </div>
    </Layout>
  );
}

export default Profile;
