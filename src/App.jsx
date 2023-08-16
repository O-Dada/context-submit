import { CartProvider } from "./context/CartContext";
import "./App.css";
import Items from "./components/Items";

import CartPrice from "./context/CartPrice";

function App() {
  return (
    <div style={{ display: "flex", gap: "15rem" }}>
      <div>
        <CartProvider>
          <Items />
          <Items />
          <Items />
          <Items />
        </CartProvider>
      </div>
      <div>
        <CartPrice />
      </div>
    </div>
  );
}

export default App;
