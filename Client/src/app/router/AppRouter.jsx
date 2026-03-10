import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import GlobalLoader from "../../components/ui/GlobalLoader";
import ProfileLayout from "../../features/profile/ui/components/ProfileLayout";
import PersonalInfo from "../../features/profile/ui/pages/PersonalInfo";
import AddressBook from "../../features/profile/ui/pages/AddressBook";
import PaymentMethods from "../../features/profile/ui/pages/PaymentMethods";
import OrderHistory from "../../features/profile/ui/pages/OrderHistory";
import MyPrescriptions from "../../features/profile/ui/pages/MyPrescriptions";
import Wishlist from "../../features/profile/ui/pages/Wishlist";
import Policy from "../../pages/Policy";
import BuyItAgain from "../../features/profile/ui/pages/BuyItAgain";
import { Navigate } from "react-router-dom";

import LandingPage from "../../pages/Home/landingPage";

const Cart = lazy(() => import("../../features/cart/ui/Cart"));
const ProductDetails = lazy(
  () => import("../../features/products/ui/ProductDetails/ProductDetails"),
);
const CategoryView = lazy(
  () => import("../../features/products/ui/CategoryView/CategoryView"),
);
const Login = lazy(() => import("../../features/auth/ui/Login"));
const Signup = lazy(() => import("../../features/auth/ui/Signup"));
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
              <ProfileLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="orders" replace />} />

          <Route path="orders" element={<OrderHistory />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="address-book" element={<AddressBook />} />
          <Route path="payment-methods" element={<PaymentMethods />} />
          <Route path="prescriptions" element={<MyPrescriptions />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="buy-again" element={<BuyItAgain />} />
        </Route>

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

        <Route path="policy" element={<Policy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
