import { useState, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, User, Sun, Moon, LogOut, Loader2, Camera } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import { toast } from "react-hot-toast";
import NotificationDropdown from "../../../features/notifications/components/NotificationDropdown";
import { logout } from "../../auth/store/authSlice";
import { useUpdateAvatarMutation } from "../../profile/store/userApi";
import { setCredentials } from "../../auth/store/authSlice";

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const [updateAvatar, { isLoading: isUpdatingAvatar }] =
    useUpdateAvatarMutation();

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);

      try {
        const response = await updateAvatar(formData).unwrap();

        dispatch(setCredentials({ user: response.data, token: user.token }));
      } catch (error) {
        toast.error("Failed to update avatar:", error);
      }
    }
    e.target.value = "";
  };

  return (
    <div className="flex h-screen bg-[#f4f7f6] dark:bg-[#121212] overflow-hidden">
      <Sidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden md:ml-64 transition-all duration-300">
        <header className="flex items-center justify-between md:justify-end px-6 py-4 bg-transparent">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors md:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <NotificationDropdown />

            <div className="flex items-center gap-3 pl-4 border-l border-gray-300 dark:border-gray-700">
              <div
                onClick={handleAvatarClick}
                title="Change Avatar"
                className="relative w-10 h-10 rounded-full bg-green-100 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer group"
              >
                {isUpdatingAvatar ? (
                  <Loader2 className="w-5 h-5 animate-spin text-green-700" />
                ) : user?.avatar ? (
                  <>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                  </>
                ) : (
                  <User className="w-6 h-6 text-green-700 dark:text-green-400" />
                )}
              </div>

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />

              <div className="hidden sm:flex flex-col">
                <span className="text-sm font-bold text-gray-900 dark:text-white capitalize">
                  {user?.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {user?.email}
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Logout"
              className="ml-2 p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
