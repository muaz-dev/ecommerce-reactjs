import React from "react";
// import { products } from "../../products/information";

function Cart({ data }: any) {
  // const cartData = data[0].cart;
  console.log("cart data", data);
  return (
    <>
      {data?.map((product: any, index: number) => {
        return (
          <div key={index} className="flex flex-col md:flex-row">
            <img
              src={product.product.image}
              alt=""
              className="w-full md:w-1/2"
            />
            <div className="p-4">
              <h1 className="text-2xl font-bold">{product.product.name}</h1>
              <p className="text-lg">{product.size.name}</p>
              <p className="text-lg">{product.color.name}</p>
              <p className="text-lg">{product.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
