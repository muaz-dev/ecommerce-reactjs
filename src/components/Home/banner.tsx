import React from "react";

function Banner() {
  const overlay: any = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  };
  return (
    <section
      className={` relative bg-[url(https://img.freepik.com/free-photo/indian-man-customer-buyer-mobile-phone-store-making-selfie-by-smartphone-monopod-stick-south-asian-peoples-technologies-concept-cellphone-shop_627829-1275.jpg?w=1380&t=st=1702092431~exp=1702093031~hmac=df4825c3727ff6fdb841d4dc2afbad03f5a6ede1774442a8cf96cdfed5cfaf07)] bg-cover bg-center bg-no-repeat`}
    >
      <div
        className={`  absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l`}
      ></div>
      <div style={overlay}></div>

      <div
        className={` relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8`}
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-start text-teal-800">
            Welcome to Defy
            <strong className="block font-extrabold text-rose-700">
              Your Ultimate IT Hub
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-start text-white">
            Explore the Latest in Technology - From Cutting-edge Gadgets to IT
            Solutions Software, Right at Your Fingertips!
          </p>

          {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="/"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Banner;
