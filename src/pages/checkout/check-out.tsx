import { useState } from "react";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Checkout() {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<number>(0);
  const [cardName, setCardName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<number>(0);
  const [cardExpirationDate, setCardExpirationDate] = useState<number>(0);
  const [cardCVV, setCardCVV] = useState<number>(0);

  const data = useSelector(
    (state: RootState) => state.purchasedItemsReducer.items
  );

  const purchaseData = {
    name: name,
    address: address,
    phone: phone,
    cardName: cardName,
    cardNumber: cardNumber,
    cardExpirationDate: cardExpirationDate,
    cardCVV: cardCVV,
    products: data,
  };

  const checkForm = () => {
    if (
      name &&
      address &&
      phone &&
      cardName &&
      cardNumber &&
      cardExpirationDate &&
      cardCVV
    ) {
      return true;
    }
    return false;
  };

  const addPurchase = async (item: any) => {
    const token = localStorage.getItem("token");
    const initialUserData = localStorage.getItem("user");
    const userName = initialUserData && JSON.parse(initialUserData);
    const response = await fetch(
      `http://localhost:4000/products/purchase/${userName.userName}${userName.timestamp}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      }
    );

    if (response.ok) {
      console.log("Purchase Successful");
    } else {
      console.error("Purchasing is not success");
    }
  };

  const finalPurchase = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addPurchase(purchaseData);
  };

  console.log("this is the data from redux", data);
  return (
    <Layout>
      <div className="flex justify-center p-4 m-4">
        {/* Delivery and Payment Details Form */}
        <div className="flex-1 p-7 m-7 border rounded shadow-lg max-w-md">
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b-4">
            Delivery
          </h2>

          <form>
            {/* User Information */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="address"
                name="address"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <h2 className="text-lg font-semibold mb-4 pb-2 border-b-4">
              Payment Details
            </h2>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(Number(e.target.value))}
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cardName"
                className="block text-sm font-medium text-gray-700"
              >
                Name on Card
              </label>
              <input
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                type="text"
                id="cardName"
                name="cardName"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                value={cardNumber}
                onChange={(e) => setCardNumber(Number(e.target.value))}
                type="text"
                id="cardNumber"
                name="cardNumber"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="flex justify-between">
              <div className="mb-4 w-1/2 mr-2">
                <label
                  htmlFor="expDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiration Date
                </label>
                <input
                  value={cardExpirationDate}
                  onChange={(e) =>
                    setCardExpirationDate(Number(e.target.value))
                  }
                  type="text"
                  id="expDate"
                  name="expDate"
                  placeholder="MM/YY"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="mb-4 w-1/2 ml-2">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  value={cardCVV}
                  onChange={(e) => setCardCVV(Number(e.target.value))}
                  type="text"
                  id="cvv"
                  name="cvv"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="flex-1 p-7 m-7 border rounded shadow-lg max-w-md">
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b-4">
            Order Summary
          </h2>
          <ul className="mb-4">
            {data.map((item) => (
              <li key={item.product.name} className="flex justify-between py-2">
                <span>{item.product.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="font-semibold text-lg flex justify-between">
            <span>Total:</span>
            <span>
              {data.reduce((total, currentItem) => {
                return total + currentItem.price;
              }, 0)}
            </span>
            {/* Replace with dynamic total */}
          </div>
          <button
            disabled={!checkForm()}
            type="submit"
            onClick={finalPurchase}
            className={`w-full ${
              checkForm() ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-400"
            }  text-white font-bold py-2 px-4 rounded mt-7`}
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
