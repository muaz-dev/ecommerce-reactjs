import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Layout from "./components/Layout/navbar";
import Login from "./components/Authentication/login";
import Ecommenrce from "./components/Ecommerce";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route path="/log-in" element={<Login />} />
        <Route path="/ecommerce" element={<Ecommenrce />} />
      </Routes>
    </Router>
  );
}

export default App;
