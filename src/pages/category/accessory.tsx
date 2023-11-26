import React from "react";
import Layout from "../../components/Layout";
import { products } from "../products/information";

function Accessories() {
  const accessoriesCategory = products.filter((product) => {
    return product.category === "accessories";
  });
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-5 w-4/5 md:w-3/5 mx-auto">
        {accessoriesCategory.map((item) => {
          return (
            <a
              key={item.id}
              href={`/product/${item.id}`}
              className="group block"
            >
              <div className="relative h-[150px] sm:h-[250px]">
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain opacity-100 "
                />
              </div>

              <div className="mt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  {item.name}
                </h3>

                <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                  {item.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </Layout>
  );
}

export default Accessories;
