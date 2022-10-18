import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

function Products() {
  const [products, setproducts] = useState([]);

  //* global state'e yani context e bağlanıyorum
  const { cart, setcart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => setproducts(res.data));
  }, []);

  const addToCart = (item) => {
    //* ürünü sepete ekleme işlemi
    //* öncelikle sepette ürün olup olmadığını kontrol ediyorum
    let product = cart.find((q) => q.id === item.id);

    if (product) {
      product.quantity = product.quantity + 1;
      setcart([...cart]);
    } else {
      let newCartItem = {
        id: item.id,
        name: item.name,
        unitPrice: item.unitPrice,
        quantity: 1,
      };
      setcart([...cart, newCartItem]);
    }
  };

  return (
    <div>
      <ul>
        {products &&
          products.map((item, key) => {
            return (
              <>
                <li key={key}>{item.name}</li>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </>
            );
          })}
      </ul>
    </div>
  );
}

export default Products;
