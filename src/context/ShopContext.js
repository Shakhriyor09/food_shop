import React, { createContext, useEffect, useState } from "react";

const ShopContext = createContext(null);

export function CartProvider(props) {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [nums, setNums] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (itemId, count = 1) => {
    const newCount = (cartItems[itemId] || 0) + count;
    updateCartItems(itemId, newCount);
    setNums(0);
  };

  const updateCartItems = (itemId, count) => {
    setCartItems((prev) => ({ ...prev, [itemId]: count }));
  };

  const removeFromCart = (itemId) => {
    const newCount = Math.max((cartItems[itemId] || 0) - 1, 0);
    updateCartItems(itemId, newCount);
  };

  const addFromCart = (itemId) => {
    const newCount = Math.max((cartItems[itemId] || 0) + 1, 0);
    updateCartItems(itemId, newCount);
  };

  const deleteCart = (itemId) => {
    const newCount = Math.max((cartItems[itemId] = 0));
    updateCartItems(itemId, newCount);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const increment = () => {
    setNums((prevNums) => prevNums + 1);
  };

  const decrement = () => {
    setNums((prevNums) => prevNums - 1);
  };

  const contextValue = {
    fakeData: data,
    addToCart,
    nums,
    cartItems,
    increment,
    decrement,
    getTotalCartItems,
    getTotalCartAmount,
    removeFromCart,
    addFromCart,
    deleteCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContext;
