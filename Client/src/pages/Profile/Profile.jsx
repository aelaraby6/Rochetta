// src/pages/Profile/Profile.jsx

import { useContext } from "react";
import { AuthContext } from "../../context/ContextObjects";
import AdminDashboard from "../Admin/AdminDashboard";
import UserProfile from "./UserProfile";

export default function Profile() {
  const { state: authState } = useContext(AuthContext);

  const isAdmin = authState.user && authState.user.role === "admin";

  if (authState.loading) {
    return (
      <div style={{ marginTop: 150, textAlign: "center" }}>
        Loading Profile...
      </div>
    );
  }

  if (isAdmin) {
    return <AdminDashboard />;
  } else {
    return <UserProfile />;
  }
}
