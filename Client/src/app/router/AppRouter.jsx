import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProfileRoute";
import GlobalLoader from "../../components/ui/GlobalLoader";

// Profile
import ProfileLayout from "../../features/profile/ui/components/ProfileLayout";
import PersonalInfo from "../../features/profile/ui/pages/PersonalInfo";
import AddressBook from "../../features/profile/ui/pages/AddressBook";
import PaymentMethods from "../../features/profile/ui/pages/PaymentMethods";
import OrderHistory from "../../features/profile/ui/pages/OrderHistory";
import MyPrescriptions from "../../features/profile/ui/pages/MyPrescriptions";
import Wishlist from "../../features/profile/ui/pages/Wishlist";
import BuyItAgain from "../../features/profile/ui/pages/BuyItAgain";
import Policy from "../../pages/Policy";

// Admin Dashboard
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../../features/admin/components/DashboardLayout";
import UsersPage from "../../features/admin/users/pages/UsersPage";
import CategoriesPage from "../../features/admin/categories/pages/CategoriesPage";

import LandingPage from "../../pages/Home/landingPage";

// Lazy-loaded pages
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

// Admin pages (lazy)
const ProductsPage = lazy(
  () => import("../../features/admin/products/ProductsPage"),
);
const AddProductPage = lazy(
  () => import("../../features/admin/products/AddProductPage"),
);
const EditProductPage = lazy(
  () => import("../../features/admin/products/EditProductPage"),
);

// Placeholder for future dashboard pages
function DashboardPlaceholder({ title }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
        <span className="text-3xl">🚧</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400">
        This page will be built in the upcoming steps.
      </p>
    </div>
  );
}

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

        {/* ═══ Admin Dashboard ═══ */}
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
            <DashboardLayout />

             </AdminRoute> 
          }
        >
          <Route
            index
            element={<DashboardPlaceholder title="Dashboard Overview" />}
          />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/add" element={<AddProductPage />} />
          <Route path="products/edit/:id" element={<EditProductPage />} />
          <Route
            path="orders"
            element={<DashboardPlaceholder title="Orders Management" />}
          />
          <Route path="users" element={<UsersPage />} />

          <Route path="categories" element={<CategoriesPage />} />
        </Route>

        <Route path="policy" element={<Policy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
