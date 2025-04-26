import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./assets/styles/index.css";
import LoginPage from "./pages/LoginPage";
import useIsAuthorized from "./hooks/useIsAuthorized";
import useAppSelector from "./hooks/useAppSelector";
import Spinner from "./components/spinner/Spinner";
import ErrorPage from "./pages/ErrorPage";

const LoggedInPagesLayout = React.lazy(
  () => import("./layouts/LoggedInPagesLayout")
);
const AnalyticsPage = React.lazy(() => import("./pages/AnalyticsPage"));
const Orders = React.lazy(() => import("./pages/Orders"));
const OrderDetails = React.lazy(() => import("./pages/OrderDetailsPage"));
const AllProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const ProductDetailsPage = React.lazy(
  () => import("./pages/ProductDetailsPage")
);
const UsersPage = React.lazy(() => import("./pages/UsersPage"));
const Unauthorized = React.lazy(() => import("./pages/Unauthorized"));
const PositionedSnackbar = React.lazy(
  () => import("./components/snackbar/Snackbar")
);

function App() {
  const loggedInUser = useAppSelector((state) => state.user);
  const snackbarState = useAppSelector((state) => state.snackbar);
  const themeState = useAppSelector((state) => state.theme);

  const isAdmin = useIsAuthorized("Admin");
  const isSubadmin = useIsAuthorized("Subadmin");

  return (
    <div className={themeState.appTheme}>
      <Suspense fallback={<Spinner />}>
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
          {isAdmin && (
            <Route path="/analytics" element={<LoggedInPagesLayout />}>
              <Route index element={<AnalyticsPage />} />
            </Route>
          )}
          {isSubadmin && (
            <Route path="/orders" element={<LoggedInPagesLayout />}>
              <Route index element={<Orders />} />
              <Route path="/orders/:id" element={<OrderDetails />} />
            </Route>
          )}
          {isSubadmin && (
            <Route path="/products" element={<LoggedInPagesLayout />}>
              <Route index element={<AllProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailsPage />} />
            </Route>
          )}
          {isAdmin && (
            <Route path="/users" element={<LoggedInPagesLayout />}>
              <Route index element={<UsersPage />} />
            </Route>
          )}
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Unauthorized />} />
        </Routes>
      </Suspense>

      {snackbarState.isOpen && (
        <PositionedSnackbar message={snackbarState.message} />
      )}
    </div>
  );
}

export default App;
