import React from "react";
import { products } from "../../pages/products/information";

function Software() {
  const softwareCategory = products.filter((product) => {
    return product.category === "software";
  });

  console.log("softwareCategory", softwareCategory);
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Software Collection
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Explore our Software Collection: Innovate, Optimize, and Transform
            Your Digital World with Cutting-Edge Solutions.
          </p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {softwareCategory?.slice(0, 3).map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={`/product/${item.id}`}
                  className="block overflow-hidden group"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-[150px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[150px]"
                  />

                  <div className="relative pt-3 bg-white">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {item.name}
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {
                          (
                            item.packages as {
                              name: string;
                              inStock: boolean;
                              price: number;
                            }[]
                          )[0]?.price
                        }
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col items-center justify-end p-6">
          <a
            href="/category/software"
            className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
          >
            See All
          </a>
        </div>
      </div>
    </section>
  );
}

export default Software;
