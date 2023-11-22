import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Main from "./components/Main";
// import Layout from "./components/Layout/navbar";
import Login from "./components/Authentication/login";
// import Ecommenrce from "./components/Ecommerce";
import Home from "./pages/home";
import Software from "./pages/products/software";
import NotFount from "./pages/not-found";
import Profile from "./pages/porfile";
import CreateAccount from "./pages/account/create-account";
import FAQs from "./pages/FAQs";
import ReturnPolicy from "./pages/legal/return-policy";
import RefundPolicy from "./pages/legal/refund-policy";
import TermOfUse from "./pages/legal/terms-of-use";
import PrivacyPolicy from "./pages/legal/privacy-policy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFount />} />
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        /> */}
        {/* <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        /> */}
        <Route path="/log-in" element={<Login />} />
        <Route path="/account/create" element={<CreateAccount />} />
        <Route path="/software" element={<Software />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/legal/return-policy" element={<ReturnPolicy />} />
        <Route path="/legal/refund-policy" element={<RefundPolicy />} />
        <Route path="/legal/terms-of-use" element={<TermOfUse />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
