import React, { useEffect } from "react";
import { useCart } from "./CartContext"; // Adjust the path as needed

const dummy = {
  title: "iPhone",
  price: "$Price",
  description: "Description",
};

function Items() {
  const { setTotalItems, setTotalPrice } = useCart();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/1");
        const data = await response.json();
        const updatedProductData = {
          title: data.title,
          image: data.images[0],
          price: data.price,
          description: data.description,
        };
        console.log(updatedProductData);

        setProductData(updatedProductData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  const [productData, setProductData] = useState(dummy);

  const addToCart = () => {
    setTotalItems((prevTotalItems) => prevTotalItems + 1);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice + parseFloat(productData.price.replace("$", ""))
    );
  };

  return (
    <div>
      <h1>{productData.title}</h1>
      <p>{productData.description}</p>
      <p>{productData.price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Items;
