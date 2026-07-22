import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Tag,
  ShoppingBag,
  Users,
  Activity,
  X,
  TrendingUp,
} from "lucide-react";

const navSections = [
  {
    label: "MENU",
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
        end: true,
      },
      {
        label: "Products",
        icon: Package,
        path: "/dashboard/products",
        end: false,
      },
      {
        label: "Categories",
        icon: Tag,
        path: "/dashboard/categories",
        end: false,
      },
    ],
  },
  {
    label: "GENERAL",
    items: [
      {
        label: "Orders",
        icon: ShoppingBag,
        path: "/dashboard/orders",
        end: false,
      },
      { label: "Customers", icon: Users, path: "/dashboard/users", end: false },
      {
        label: "Analytics",
        icon: TrendingUp,
        path: "/dashboard/analytics",
        end: false,
      },
    ],
  },
];

export default function Sidebar({ mobileOpen, onMobileClose }) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={[
          "fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64",
          "bg-[#165938] shadow-2xl", 
          "transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        <div className="flex items-center gap-3 px-6 h-24 shrink-0 border-b border-white/10">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md">
            <Activity className="w-6 h-6 text-[#165938]" />{" "}
          </div>
          <span className="text-2xl font-bold text-white tracking-wide">
            Rochetta
          </span>

          <button
            onClick={onMobileClose}
            className="ml-auto p-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white md:hidden transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 space-y-8 scrollbar-hide">
          {navSections.map((section) => (
            <div key={section.label}>
              <p className="px-8 text-[11px] font-bold text-white/50 uppercase tracking-widest mb-3">
                {section.label}
              </p>

              <ul className="space-y-1.5 px-4">
                {section.items.map((item) => (
                  <SidebarItem
                    key={item.path}
                    item={item}
                    onNavigate={onMobileClose}
                  />
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

function SidebarItem({ item, onNavigate }) {
  const Icon = item.icon;

  return (
    <li>
      <NavLink
        to={item.path}
        end={item.end}
        onClick={onNavigate}
        className={({ isActive }) =>
          [
            "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200", 
            isActive
              ? "bg-white/15 text-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
              : "text-white/70 hover:bg-white/10 hover:text-white", 
          ].join(" ")
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              className={`w-5 h-5 transition-transform duration-200 ${
                isActive ? "text-white scale-110" : "text-white/70"
              }`}
            />
            <span>{item.label}</span>
          </>
        )}
      </NavLink>
    </li>
  );
}
