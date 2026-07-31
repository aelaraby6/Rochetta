import {
  X,
  Mail,
  Phone,
  Calendar,
  User as UserIcon,
  Shield,
  Loader2,
} from "lucide-react";
import { useGetUserByIdQuery } from "../api/usersApi";

export default function UserDetailsModal({ isOpen, onClose, userId }) {
  const { data, isLoading, isError } = useGetUserByIdQuery(userId, {
    skip: !userId || !isOpen,
  });

  if (!isOpen) return null;

  const user = data?.data;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-[#1e1e1e] w-full max-w-2xl rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              User Profile
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Detailed view of user information.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-48">
              <Loader2 className="w-8 h-8 animate-spin text-[#165938]" />
            </div>
          ) : isError || !user ? (
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <p className="text-red-500 font-medium mb-4">
                Failed to load user data.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center gap-4 shrink-0">
                <div className="w-32 h-32 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-[#252525] shadow-sm overflow-hidden flex items-center justify-center">
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
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${user.is_active ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}
                >
                  {user.is_active ? "Active Account" : "Inactive Account"}
                </span>
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
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
          )}
        </div>
      </div>
    </div>
  );
}
