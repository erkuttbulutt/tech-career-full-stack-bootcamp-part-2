import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context-api-sample/CartContext";

//* context için App'i CardProvide ile sarmalladık
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartProvider>
      <App></App>
    </CartProvider>
  </BrowserRouter>
);
