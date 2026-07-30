import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProfileRoute";
import AdminRoute from "./AdminRoute";
import GlobalLoader from "../../components/ui/GlobalLoader";

const LandingPage = lazy(() => import("../../pages/Home/landingPage"));
const ProductDetails = lazy(
  () => import("../../features/products/ui/ProductDetails/ProductDetails"),
);
const CategoryView = lazy(
  () => import("../../features/products/ui/CategoryView/CategoryView"),
);
const Login = lazy(() => import("../../features/auth/ui/Login"));
const Signup = lazy(() => import("../../features/auth/ui/Signup"));
const NotFound = lazy(() => import("../../pages/Errors/NotFound"));
const Cart = lazy(() => import("../../features/cart/ui/Cart"));
const Policy = lazy(() => import("../../pages/Policy"));

const ProfileLayout = lazy(
  () => import("../../features/profile/ui/components/ProfileLayout"),
);
const PersonalInfo = lazy(
  () => import("../../features/profile/ui/pages/PersonalInfo"),
);
const AddressBook = lazy(
  () => import("../../features/profile/ui/pages/AddressBook"),
);
const PaymentMethods = lazy(
  () => import("../../features/profile/ui/pages/PaymentMethods"),
);
const OrderHistory = lazy(
  () => import("../../features/profile/ui/pages/OrderHistory"),
);
const MyPrescriptions = lazy(
  () => import("../../features/profile/ui/pages/MyPrescriptions"),
);
const Wishlist = lazy(() => import("../../features/profile/ui/pages/Wishlist"));
const BuyItAgain = lazy(
  () => import("../../features/profile/ui/pages/BuyItAgain"),
);

const DashboardLayout = lazy(
  () => import("../../features/admin/components/DashboardLayout"),
);
const ProductsPage = lazy(
  () => import("../../features/admin/products/ProductsPage"),
);
const UsersPage = lazy(
  () => import("../../features/admin/users/pages/UsersPage"),
);
const CategoriesPage = lazy(
  () => import("../../features/admin/categories/pages/CategoriesPage"),
);
const OrdersPage = lazy(() => import("../../features/admin/order/OrdersPage"));
const ReviewsPage = lazy(
  () => import("../../features/admin/reviews/pages/ReviewsPage"),
);
const DashboardPage = lazy(
  () => import("../../features/admin/dashboard/DashboardPage"),
);

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

const RootRedirect = () => {
  // const user = useSelector((state) => state.auth.user);
  // if (user && (user.role === "admin" || user.role === "super_admin")) {
  //   return <Navigate to="/dashboard" replace />;
  // }
  return <LandingPage />;
};

// const AuthRedirect = ({ children }) => {
//   const user = useSelector((state) => state.auth.user);
//   if (user && (user.role === "admin" || user.role === "super_admin")) {
//     return <Navigate to="/dashboard" replace />;
//   }
//   if (user && user.role === "user") {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };

export default function AppRouter() {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <Routes>
        <Route path="/" element={<RootRedirect />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:slug" element={<CategoryView />} />

        <Route
          path="/signup"
          element={
            // <AuthRedirect>
            <Signup />
            /* </AuthRedirect> */
          }
        />
        <Route
          path="/login"
          element={
            // <AuthRedirect>
            <Login />
            /* </AuthRedirect> */
          }
        />

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
          path="/dashboard"
          element={
            <AdminRoute>
              <DashboardLayout />
            </AdminRoute>
          }
        >
          <Route
            index
            element={<DashboardPage />}
          />
          <Route path="products" element={<ProductsPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>

        <Route path="policy" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
