import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { setSearchTerm } from "../../../features/uiSlice/uiSlice";
import { useDebounce } from "../../../hooks/useDebounce";

export default function SearchBar({ id = "search-input" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const initialSearchTerm = useSelector((state) => state.ui.searchTerm);

  const [localSearch, setLocalSearch] = useState(initialSearchTerm);
  const debouncedSearch = useDebounce(localSearch, 500);

  useEffect(() => {
    dispatch(setSearchTerm(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      dispatch(setSearchTerm(localSearch));

      if (
        !location.pathname.includes("/category") &&
        !location.pathname.includes("/products")
      ) {
        navigate("/products");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <label htmlFor={id} className="sr-only">
        Search products
      </label>
      <input
        id={id}
        type="text"
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        placeholder="Search medicine, medical products..."
        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white focus:ring-2 focus:ring-green-400 outline-none border-none shadow-inner"
      />
      <Search
        className="absolute left-3 top-3 w-5 h-5 text-gray-400"
        aria-hidden="true"
      />
    </form>
  );
}
