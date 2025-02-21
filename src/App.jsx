import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
    
    {/* <Header /> */}
    {/* <main className="py-3">
        <Container> */}
        <BrowserRouter>
          <Routes>
            {/* <Route path="/header" element={<Header></Header>}/>
            <Route path="/footer" element={<Footer></Footer>}/> */}
            <Route path="/" element={<Layout><HomeScreen /></Layout>} />
            <Route path="/login" element={<Layout><LoginScreen /></Layout>} />
            <Route path="/register" element={<Layout><RegisterScreen /></Layout>} />
            <Route path="/profile" element={<Layout><ProfileScreen /></Layout>} />
            <Route path="/shipping" element={<Layout><ShippingScreen /></Layout>} />
            <Route path="/placeorder" element={<Layout><PlaceOrderScreen /></Layout>} />
            <Route path="/order/:id" element={<OrderScreen />}/>
            <Route path="/payment" element={<Layout><PaymentScreen /></Layout>} />
            <Route path='/product/:id' element={<Layout><ProductScreen/></Layout>}/>
            <Route path='/cart/:id' element={<Layout><CartScreen/></Layout>}/>
            <Route path="/cart" element={<Layout><CartScreen /></Layout>} />

            <Route path="/admin/userlist" element={<Layout><UserListScreen /></Layout>} />
            <Route path="/admin/user/:id/edit" element={<Layout><UserEditScreen /></Layout>} />

            <Route path="/admin/productlist" element={<Layout><ProductListScreen /></Layout>} />
            <Route path="/admin/product/:id/edit" element={<Layout><ProductEditScreen /></Layout>} />

            <Route path="/admin/orderlist" element={<Layout><OrderListScreen /></Layout>} />
          </Routes>
        </BrowserRouter>
        {/* </Container>
      </main> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;