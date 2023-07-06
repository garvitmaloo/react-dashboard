import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./assets/styles/index.css";
import LoginPage from "./pages/LoginPage";
import LoggedInPagesLayout from "./layouts/LoggedInPagesLayout";
import AnalyticsPage from "./pages/AnalyticsPage";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetailsPage";
import AllProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import UsersPage from "./pages/UsersPage";
import useIsAuthorized from "./hooks/useIsAuthorized";
import Unauthorized from "./pages/Unauthorized";
import PositionedSnackbar from "./components/snackbar/Snackbar";

function App() {
  const loggedInUser = useSelector((state: any) => state.user);
  const snackbarState = useSelector((state: any) => state.snackbar);

  return (
    <div className="app light">
      <Routes>
        <Route
          path="/"
          element={
            !loggedInUser ? (
              <Navigate to="/login" />
            ) : loggedInUser.role === "Admin" ? (
              <Navigate to="/analytics" />
            ) : (
              <Navigate to="/orders" />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        {useIsAuthorized("Admin") && (
          <Route path="/analytics" element={<LoggedInPagesLayout />}>
            <Route index element={<AnalyticsPage />} />
          </Route>
        )}
        {useIsAuthorized("Subadmin") && (
          <Route path="/orders" element={<LoggedInPagesLayout />}>
            <Route index element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
          </Route>
        )}
        {useIsAuthorized("Subadmin") && (
          <Route path="/products" element={<LoggedInPagesLayout />}>
            <Route index element={<AllProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
          </Route>
        )}
        {useIsAuthorized("Admin") && (
          <Route path="/users" element={<LoggedInPagesLayout />}>
            <Route index element={<UsersPage />} />
          </Route>
        )}
        <Route path="*" element={<Unauthorized />} />
      </Routes>

      {snackbarState.isOpen && (
        <PositionedSnackbar message={snackbarState.message} />
      )}
    </div>
  );
}

export default App;
