import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./router-sample/HomePage";
import AboutPage from "./router-sample/AboutPage";
import ContactPage from "./router-sample/ContactPage";
import CategoryPage from "./router-sample/CategoryPage";
import CategoryDetailPage from "./router-sample/CategoryDetailPage";
import GuardSample from "./router-sample/GuardSample";
import ChildSample from "./router-sample/ChildSample";
import LoginPage from "./router-sample/LoginPage";
import LocationSample from "./router-sample/LocationSample";
import Products from "./context-api-sample/Products";
import { useContext } from "react";
import { CartContext } from "./context-api-sample/CartContext";
import Cart from "./context-api-sample/Cart";
import "antd/dist/antd.css";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { Menu } from "antd";
import Customers from "./comp/Customers";
import AddCustomer from "./comp/AddCustomer";
import AddProduct from "./comp/AddProduct";
import AddSupplierWithFormik from "./comp/AddSupplierWithFormik";

function App() {
  //* sepetteki verileri alıyoruz
  const { cart } = useContext(CartContext);

  const items = [
    { label: <Link to="/">Home</Link>, key: "1" },
    { label: <Link to="/contact">Contact</Link>, key: "2" },
    { label: <Link to="/about">About</Link>, key: "3" },
    { label: <Link to="/categories">Categories</Link>, key: "4" },
    { label: <Link to="/guardSample">Guard Sample</Link>, key: "5" },
    { label: <Link to="/location">Location Sample</Link>, key: "6" },
    { label: <Link to="/products">Products</Link>, key: "7" },
    { label: <Link to="/cart">Cart</Link>, key: "8" },
    { label: <Link to="/customers">Customers</Link>, key: "9" },
    { label: <Link to="/addCustomer">Add Customer</Link>, key: "10" },
    { label: <Link to="/addProduct">Add Product</Link>, key: "11" },
    { label: <Link to="/addSupplierWithFormik">Add Supplier With Formik</Link>, key: "12" },
  ];
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Routes>
              {/* Router-Sample */}
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route path="/categories" element={<CategoryPage />}></Route>
              <Route
                path="/categories/:id"
                element={<CategoryDetailPage />}
              ></Route>

              {/* Guard Sample */}
              <Route path="/login" element={<LoginPage />}></Route>
              <Route
                path="/guardsample"
                element={
                  <GuardSample>
                    <ChildSample />
                  </GuardSample>
                }
              ></Route>

              {/* Location Sample */}
              <Route path="/location" element={<LocationSample />}></Route>

              {/* Context-Api */}
              <Route path="/products" element={<Products />}></Route>
              <Route path="/cart" element={<Cart />}></Route>

              {/* Customers */}
              <Route path="/customers" element={<Customers />}></Route>

              {/* Add Customers */}
              <Route path="/addCustomer" element={<AddCustomer />}></Route>

              {/* Add Product */}
              <Route path="/addProduct" element={<AddProduct />}></Route>

              {/* Add Supplier With Formik */}
              <Route path="/addSupplierWithFormik" element={<AddSupplierWithFormik/>}></Route>
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1>Site Header</h1>
        <h1>Cart Length: {cart.length}</h1>
      </div>

      <h1>Site Footer</h1>
    </>
  );
}

export default App;
