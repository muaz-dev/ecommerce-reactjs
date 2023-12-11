import React from "react";

const CustomerProfiles = ({ data }: any) => {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-md my-5">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Purchases</h1>
        <hr />
      </div>

      {data.map((customer: any, index: number) => (
        <div key={index} className=" py-7">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {index + 1}.Customer: {customer.name}
          </h2>
          <p className="text-lg text-gray-600">
            <strong>Address:</strong> {customer.address}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Phone:</strong> {customer.phone}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Card Name:</strong> {customer.cardName}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Card Number:</strong>{" "}
            {`**** **** **** ${customer.cardNumber.toString().slice(-4)}`}
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Products Purchased:
            </h3>
            {customer.products.map((product: any, idx: number) => (
              <div key={idx} className="mb-4">
                <p className="text-lg font-medium text-gray-800">
                  {product.product.name} - ${product.price}
                </p>
                <p className="text-md text-gray-600">
                  Size: {product.size?.name || "N/A"}
                </p>
                <p className="text-md text-gray-600">
                  Color: {product.color?.name || "N/A"}
                </p>
                <p className="text-md text-gray-600">
                  Package: {product.package?.name || "N/A"}
                </p>
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CustomerProfiles;
