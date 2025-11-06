// src/components/Admin/UserManager.jsx

import React, { useState, useEffect, useCallback, useContext } from "react";
import api from "../../api";
import { AuthContext } from "../../context/ContextObjects";

const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state: authState } = useContext(AuthContext);

  const fetchAllUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get("/users/all");
      setUsers(res.data?.users || []);
    } catch (err) {
      console.error("Failed to fetch all users:", err);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  const handleRoleChange = async (userId, newRole) => {
    if (userId === authState.user._id) {
      alert("You cannot change your own role.");
      return;
    }
    try {
      await api.patch(`/users/${userId}/role`, { role: newRole });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch (err) {
      alert("Failed to update user role.");
      console.error(err);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (userId === authState.user._id) {
      alert("You cannot delete your own account.");
      return;
    }
    if (
      window.confirm(
        "Are you sure you want to delete this user? This action is permanent."
      )
    ) {
      try {
        await api.delete(`/users/${userId}`);
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
      } catch (err) {
        alert("Failed to delete user.");
        console.error(err);
      }
    }
  };

  if (loading) return <p className="text-center mt-5">Loading Users...</p>;

  return (
    <div className="user-manager">
      <h3>User Management ({users.length} Total)</h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id.slice(-6)}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <select
                  className="form-select form-select-sm"
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  disabled={user._id === authState.user._id} 
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteUser(user._id)}
                  disabled={user._id === authState.user._id} 
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManager;
