// import { useState } from "react";
import { CartProvider } from "./components/CartContext";
import "./App.css";
import Items from "./components/items";
import { CartPrice } from "./components/CartPrice";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <CartProvider>
        <Items />
        <Items />
        <Items />
        <Items />
        <CartPrice />
      </CartProvider>
    </div>
  );
}

export default App;
