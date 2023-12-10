import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Main from "./components/Main";
// import Layout from "./components/Layout/navbar";
import Login from "./pages/account/login";
// import Ecommenrce from "./components/Ecommerce";
import Home from "./pages/home";
// import Software from "./pages/products/software";
import NotFount from "./pages/not-found";
import Profile from "./pages/porfile";
import CreateAccount from "./pages/account/create-account";
import FAQs from "./pages/FAQs";
import ReturnPolicy from "./pages/legal/return-policy";
import RefundPolicy from "./pages/legal/refund-policy";
import TermOfUse from "./pages/legal/terms-of-use";
import PrivacyPolicy from "./pages/legal/privacy-policy";
import Contact from "./pages/contact";
import Cart from "./pages/checkout/cart";
import Products from "./pages/products";
import PreventRoute from "./components/Authentication/prevent-route";
import Dashboard from "./pages/user/dashboard";
import Software from "./pages/category/software";
import Hardware from "./pages/category/hardware";
import Accessories from "./pages/category/accessory";
import CheckOut from "./pages/checkout/check-out";
import ComingSoon from "./pages/comming-soon";
import Test from "./pages/test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFount />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/log-in"
          element={
            <PreventRoute>
              <Login />
            </PreventRoute>
          }
        />

        <Route
          path="/account/create"
          element={
            <PreventRoute>
              <CreateAccount />
            </PreventRoute>
          }
        />
        {/* <Route path="/software" element={<Software />} /> */}

        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal/return-policy" element={<ReturnPolicy />} />
        <Route path="/legal/refund-policy" element={<RefundPolicy />} />
        <Route path="/legal/terms-of-use" element={<TermOfUse />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/checkout/cart" element={<Cart />} />
        <Route path="/checkout/puschase" element={<CheckOut />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category/software" element={<Software />} />
        <Route path="/category/hardware" element={<Hardware />} />
        <Route path="/category/accessory" element={<Accessories />} />
        <Route path="/test" element={<Test />} />
        <Route path="/comming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
