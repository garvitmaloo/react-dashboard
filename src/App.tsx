import { Routes, Route, Navigate } from "react-router-dom";

import "./assets/styles/index.css";
import LoginPage from "./pages/LoginPage";
import LoggedInPagesLayout from "./layouts/LoggedInPagesLayout";
import AnalyticsPage from "./pages/AnalyticsPage";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetailsPage";
import AllProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div className="app dark">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/analytics" element={<LoggedInPagesLayout />}>
          <Route index element={<AnalyticsPage />} />
        </Route>
        <Route path="/orders" element={<LoggedInPagesLayout />}>
          <Route index element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
        </Route>
        <Route path="/products" element={<LoggedInPagesLayout />}>
          <Route index element={<AllProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/users" element={<LoggedInPagesLayout />}>
          <Route index element={<UsersPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
