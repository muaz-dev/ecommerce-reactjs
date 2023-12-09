import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { update } from "../../features/cart/update-cart";
import { addItems } from "../../features/cart/check-out";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  image: string;
  name: string;
  color: { name: string };
  package: { name: string };
  size: { name: string };
}

interface CartItem {
  product: Product;
  color: any;
  size: any;
  package: any;
  price: any;
}

function Cart() {
  const navigate = useNavigate();
  const [data, setData] = useState<CartItem[]>([]);
  const [id, setId] = useState("");
  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);

  console.log("this is selected items", selectedItems);

  const dispatch = useDispatch();

  const handleCheckboxChange = (item: any) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const initialUserData = localStorage.getItem("user");
    const userName = initialUserData && JSON.parse(initialUserData);

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://localhost:4000/products/${userName.userName}${userName.timestamp}`,
        config
      );
      if (response.data && response.data.length > 0) {
        setData(response.data[0].cart);
        setId(response.data[0]._id);
        console.log("whole data", response.data[0]._id);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleUpdateCart = async (updateData: any) => {
    const token = localStorage.getItem("token");
    const initialUserData = localStorage.getItem("user");
    const userName = initialUserData && JSON.parse(initialUserData);

    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.patch(
        `http://localhost:4000/products/update/${userName.userName}${userName.timestamp}/${id}`,

        updateData,
        config
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = (indexToRemove: any) => {
    const newData = data.filter((_, index) => index !== indexToRemove);
    setData(newData);
    handleUpdateCart(newData);
    dispatch(update());
  };

  useEffect(() => {
    fetchData();
  }, []);
  const price = selectedItems.reduce((total, currentItem) => {
    return total + currentItem.price;
  }, 0);

  function calculatePercentage(price: number) {
    const percentage = 7;
    const result = (price * percentage) / 100;
    return parseFloat(result.toFixed(2));
  }

  const checkOut = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addItems(selectedItems));

    navigate("/checkout/puschase");
  };

  console.log("seleted items", selectedItems);
  return (
    <Layout>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {data &&
                  data.map((item, index) => {
                    return (
                      <li
                        key={item.product.id + index}
                        className="flex items-center gap-4"
                      >
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item)}
                          onChange={() => handleCheckboxChange(item)}
                          className="rounded"
                        />
                        <img
                          src={item.product.image}
                          alt=""
                          className="h-16 w-16 rounded object-cover"
                        />

                        <div>
                          <h3 className="text-sm text-gray-900">
                            {item.product.name}
                          </h3>

                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            {item.color && (
                              <div>
                                <dt className="inline">Color:</dt>
                                <dd className="inline"> {item.color.name}</dd>
                              </div>
                            )}
                            {item.size && (
                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline"> {item.size.name}</dd>
                              </div>
                            )}
                            {item.package && (
                              <div>
                                <dt className="inline">Package:</dt>
                                <dd className="inline"> {item.package.name}</dd>
                              </div>
                            )}
                            <div>
                              <dt className="inline">Price:</dt>
                              <dd className="inline"> {item.price}</dd>
                            </div>
                          </dl>
                        </div>

                        <div className="flex flex-1 items-center justify-end gap-2">
                          <button
                            className="text-gray-600 transition hover:text-red-600"
                            onClick={() => removeItem(index)}
                          >
                            <span className="sr-only">Remove item</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </li>
                    );
                  })}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>${price}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT(7%)</dt>
                      <dd>${calculatePercentage(price)}</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>${price + calculatePercentage(price)}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <button
                      onClick={checkOut}
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Cart;
