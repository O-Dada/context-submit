import React, { useEffect } from "react";
import { useState } from "react";
import { useCart } from "../context/CartContext"; // Adjust the path as needed
import food from "";

const dummy = {
  title: "iPhone",
  price: "$Price",
  description: "Description",
};

function Items() {
  const { setTotalItems, setTotalPrice } = useCart();

  const [productData, setProductData] = useState(dummy);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/");
        const data = await response.json();
        // console.log(data);
        const updatedProductData = data.map((product) => ({
          title: product.title,
          image: product.images[0], // You should check if "images" exists in each product
          price: product.price,
          description: product.description,
        }));
        console.log(updatedProductData);
        setProductData(updatedProductData);
        console.log(updatedProductData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  // const addToCart = () => {
  //   setTotalItems((prevTotalItems) => prevTotalItems + 1);
  //   setTotalPrice(
  //     (prevTotalPrice) =>
  //       prevTotalPrice + parseFloat(productData.price.replace("$", ""))
  //   );
  // };

  return (
    <div>
      <h1>{productData.title}</h1>
      <p>{productData.description}</p>
      <p>{productData.price}</p>
      {/* <button onClick={addToCart}>Add to cart</button> */}
    </div>
  );
}

export default Items;
