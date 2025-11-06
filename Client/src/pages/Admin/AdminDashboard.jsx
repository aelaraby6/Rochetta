// src/pages/Admin/AdminDashboard.jsx 
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextObjects";
import AdminNav from "../../components/Admin/AdminNav";
import OrderManager from "../../components/Admin/OrderManager";
import AdminOverview from "./AdminOverview";
import UserManager from "../../components/Admin/UserManager"; 

const AdminDashboard = () => {
  const { state: authState } = useContext(AuthContext);
  const isAdmin = authState.user && authState.user.role === "admin";

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container mt-5 pt-5 admin-dashboard">
      <h1 className="mb-4 text-center text-primary">Admin Control Panel</h1>
      <AdminNav />

      <div className="row mt-4">
        <div className="col-12">
          <Routes>
            <Route path="/" element={<AdminOverview />} />
            <Route path="users" element={<UserManager />} />
            <Route path="orders" element={<OrderManager />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
