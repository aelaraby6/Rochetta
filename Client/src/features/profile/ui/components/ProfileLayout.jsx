import { useRef, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { User, LogOut, Camera, Loader2, FilePlus } from "lucide-react";
import toast from "react-hot-toast";
import { logout } from "../../../auth/store/authSlice";
import ProfileNav from "./ProfileNav";
import { useUpdateAvatarMutation } from "../../store/userApi"; 
import { setCredentials } from "../../../auth/store/authSlice"; 

export default function ProfileLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [updateAvatar] = useUpdateAvatarMutation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file); 

    setIsUploading(true);
    try {
      const response = await updateAvatar(formData).unwrap();
      dispatch(setCredentials({ user: response.data, token: user.token }));
      toast.success("Avatar updated successfully!");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update avatar");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-8 lg:px-12 mb-20 w-full transition-colors duration-300">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 p-8 sm:p-12 mb-8 relative z-20 overflow-visible">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-8">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800 shrink-0 overflow-hidden">
                {isUploading ? (
                  <Loader2
                    className="w-8 h-8 animate-spin"
                    aria-hidden="true"
                  />
                ) : user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={`${user.name || "User"}'s avatar`}
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchpriority="high"
                  />
                ) : (
                  <User className="w-12 h-12" aria-hidden="true" />
                )}
              </div>

              <button
                onClick={handleAvatarClick}
                disabled={isUploading}
                className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 p-2.5 rounded-full shadow-md border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-transform group-hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-600"
                aria-label="Upload new avatar"
              >
                <Camera
                  className="w-4 h-4 text-green-600 dark:text-green-500"
                  aria-hidden="true"
                />
              </button>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                aria-hidden="true"
                tabIndex="-1"
              />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tight line-clamp-1">
                {user.name || user.username || "Valued Customer"}
              </h1>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={() => toast("Upload Modal will open here")}
              className="sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white rounded-xl font-bold transition-transform active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Upload new Rochetta"
            >
              <FilePlus
                className="w-5 h-5  hidden sm:inline"
                aria-hidden="true"
              />
              Upload Rochetta
            </button>

            <button
              onClick={handleLogout}
              className="sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-xl font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Sign out of your account"
            >
              <LogOut className="w-5 h-5 hidden sm:inline" aria-hidden="true" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
          <ProfileNav />
        </div>
      </div>

      <div
        className="bg-white dark:bg-[#1e1e1e] rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 p-8 sm:p-12 min-h-[500px] relative z-10 focus-visible:outline-none"
        tabIndex="-1"
      >
        <Outlet />
      </div>
    </div>
  );
}
