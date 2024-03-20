import React from "react";
import Routers from "./routes/rout";
import { CartProvider } from "./context/ShopContext";


const App = () => {
  return (
    <>
    <CartProvider>
      <Routers />
    </CartProvider>
    </>
  );
};

export default App;
