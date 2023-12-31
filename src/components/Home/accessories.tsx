import React from "react";
import { products } from "../../pages/products/information";

function Accessories() {
  const accessoryCategory = products.filter((product) => {
    return product.category === "accessories";
  });
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Accessories Collection
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Enhance Your Tech Experience: Dive into Our Accessories Collection
            for Style, Functionality, and Innovation.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          {accessoryCategory?.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={`/product/${item.id}`}
                  className="relative block group"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-">{item.name}</h3>

                    {/* <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span> */}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col items-start justify-end p-6">
          <a
            href="/category/accessory"
            className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
          >
            See All
          </a>
        </div>
      </div>
    </section>
  );
}

export default Accessories;
