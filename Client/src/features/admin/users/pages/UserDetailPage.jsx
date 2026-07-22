import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  User as UserIcon,
  Shield,
} from "lucide-react";
import { useGetUserByIdQuery } from "../api/usersApi";

export default function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetUserByIdQuery(id);

  const user = data?.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 font-medium">
          User not found or failed to load data.
        </p>
        <button
          onClick={() => navigate("/dashboard/users")}
          className="mt-4 text-green-600 hover:underline"
        >
          Go back to users list
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/dashboard/users")}
          className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            User Profile
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Detailed view of user information.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col items-center gap-4 shrink-0">
            <div className="w-32 h-32 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-[#252525] shadow-lg overflow-hidden flex items-center justify-center">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <UserIcon className="w-12 h-12 text-gray-400" />
              )}
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.is_active
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {user.is_active ? "Active Account" : "Inactive Account"}
            </span>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                <UserIcon className="w-3.5 h-3.5" /> Full Name
              </label>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {user.name}
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" /> Role
              </label>
              <p className="text-base font-medium text-gray-900 dark:text-white capitalize">
                {user.role.replace("_", " ")}
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> Email Address
              </label>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {user.email}
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> Phone Number
              </label>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {user.phone || "Not provided"}
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" /> Joined Date
              </label>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
