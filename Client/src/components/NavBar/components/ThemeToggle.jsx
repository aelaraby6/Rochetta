import { useDispatch, useSelector } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "../../../features/uiSlice/uiSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <button
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-lg text-white hover:bg-green-600 dark:hover:bg-green-800 transition-colors"
    >
      {darkMode ? (
        <Sun className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
}
