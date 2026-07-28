import { useState } from "react";
import { Search, Filter, ShoppingBag } from "lucide-react";
import DynamicTable from "../components/DynamicTable";
import { useDebounce } from "../../../hooks/useDebounce";
import {
  useGetOrdersQuery,
  useUpdateOrderStatusMutation,
} from "./api/ordersApi";
import toast from "react-hot-toast";
import OrderDetailsModal from "./components/OrderDetailsModal";

export default function OrdersPage() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [statusFilter, setStatusFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const { data, isLoading } = useGetOrdersQuery({
    page,
    limit,
    search: debouncedSearch,
    status: statusFilter,
    startDate,
    endDate,
  });

  const [updateOrderStatus, { isLoading: isUpdatingStatus }] =
    useUpdateOrderStatusMutation();

  const ordersData = data?.data?.orders || [];
  const pagination = data?.data?.pagination || { totalPages: 1 };

  const handleStatusChange = async (e, id) => {
    e.stopPropagation();
    const newStatus = e.target.value;
    try {
      await updateOrderStatus({ id, status: newStatus }).unwrap();
      toast.success("Order status updated successfully");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update status");
    }
  };

  const statusColors = {
    pending:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500",
    shipped: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500",
    delivered:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500",
    canceled: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500",
  };

  const columns = [
    {
      key: "id",
      label: "Order ID",
      render: (_, row) => (
        <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
          #{row._id.slice(-6).toUpperCase()}
        </span>
      ),
    },
    {
      key: "user",
      label: "Customer",
      render: (_, row) => (
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900 dark:text-white">
            {row.user?.name || "Unknown User"}
          </span>
          <span className="text-xs text-gray-500">
            {row.user?.email || "No email"}
          </span>
        </div>
      ),
    },
    {
      key: "total",
      label: "Total Amount",
      render: (val) => (
        <span className="font-semibold text-gray-900 dark:text-white">
          ${val?.toFixed(2)}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (val, row) => (
        <div onClick={(e) => e.stopPropagation()}>
          <select
            value={val}
            onChange={(e) => handleStatusChange(e, row._id)}
            disabled={isUpdatingStatus || val === "canceled"}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg border-none outline-none cursor-pointer appearance-none text-center ${statusColors[val] || ""}`}
          >
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
      ),
    },
    {
      key: "createdAt",
      label: "Date",
      render: (val) => new Date(val).toLocaleDateString("en-GB"),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Orders Management
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Track, update, and manage customer orders.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1e1e1e] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders, customers..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#165938] outline-none transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <div className="relative flex-1 sm:w-36">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#165938] outline-none transition-all cursor-pointer appearance-none"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>

          <div className="flex items-center gap-2 flex-1 sm:w-auto">
            <input
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                setPage(1);
              }}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#165938]"
            />
            <span className="text-gray-400">-</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setPage(1);
              }}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#165938]"
            />
          </div>
        </div>
      </div>

      <DynamicTable
        columns={columns}
        data={ordersData}
        rowKey="_id"
        isLoading={isLoading}
        currentPage={page}
        totalPages={pagination.totalPages}
        onPageChange={setPage}
        emptyMessage="No orders found."
        emptyIcon={ShoppingBag}
        onRowClick={(row) => setSelectedOrderId(row._id)}
      />

      {selectedOrderId && (
        <OrderDetailsModal
          isOpen={!!selectedOrderId}
          onClose={() => setSelectedOrderId(null)}
          orderId={selectedOrderId}
        />
      )}
    </div>
  );
}
