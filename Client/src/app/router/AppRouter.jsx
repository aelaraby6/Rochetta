import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import GlobalLoader from "../../components/ui/GlobalLoader";

import LandingPage from "../../pages/Home/landingPage";

const Cart = lazy(() => import("../../features/cart/ui/Cart"));
const ProductDetails = lazy(
  () => import("../../features/products/ui/productDetails/ProductDetails"),
);
const CategoryView = lazy(
  () => import("../../features/products/ui/CategoryView/CategoryView"),
);
const Login = lazy(() => import("../../features/auth/ui/Login"));
const Signup = lazy(() => import("../../features/auth/ui/signup"));
const Profile = lazy(() => import("../../pages/Profile/Profile"));
const NotFound = lazy(() => import("../../pages/Errors/NotFound"));
const AdminAddProduct = lazy(
  () => import("../../features/admin/AddProduct/AdminAddProduct"),
);
const AdminEditProduct = lazy(
  () => import("../../features/admin/EditProduct/AdminEditProduct"),
);

export default function AppRouter() {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:slug" element={<CategoryView />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-product"
          element={
            <ProtectedRoute>
              <AdminAddProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-product/:id"
          element={
            <ProtectedRoute>
              <AdminEditProduct />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
