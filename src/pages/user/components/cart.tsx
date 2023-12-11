import React from "react";
// import { products } from "../../products/information";

function Cart({ data }: any) {
  // const cartData = data[0].cart;
  console.log("cart data", data);
  return (
    <>
      {data?.map((product: any, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row w-4/5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-7 md:my-7 p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.product.image}
              alt=""
              className="max-w-xs h-auto rounded-t-lg md:rounded-none md:rounded-l-lg"
            />
            <div className="p-4">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Name : {product.product.name}
              </h1>
              {product.size.name && (
                <p className="text-lg text-gray-600 mb-1">
                  Size : {product.size.name}
                </p>
              )}
              {product.color.name && (
                <p className="text-lg text-gray-600 mb-1">
                  Color : {product.color.name}
                </p>
              )}
              {product.package.name && (
                <p className="text-lg text-gray-600 mb-1">
                  Package : {product.package.name}
                </p>
              )}

              <p className="text-lg text-gray-600 ">Price : {product.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
