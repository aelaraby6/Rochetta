import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, Mail, Bell, User } from "lucide-react";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

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

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
              <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-all">
                <Mail className="w-5 h-5 fill-current" />
              </button>
              <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-all">
                <Bell className="w-5 h-5 fill-current" />
              </button>
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-gray-300 dark:border-gray-700">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
                <User className="w-6 h-6 text-green-700" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  Abdelrahman
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  test@gmail.com
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
