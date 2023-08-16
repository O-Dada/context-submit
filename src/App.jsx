import { CartProvider } from "./context/CartContext";
import "./App.css";
import Items from "./components/Items";
import CartPrice from "./context/CartPrice";

function App() {
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
