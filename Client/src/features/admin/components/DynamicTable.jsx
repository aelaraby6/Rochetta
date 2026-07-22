import { Package } from "lucide-react";
import Pagination from "../../../components/ui/Pagination";

/**
 * DynamicTable — A generic, reusable table component for the admin dashboard.
 *
 * @param {Array}    columns       - Column config: [{ key, label, render?, align? }]
 *                                   `render(value, row)` is optional custom renderer.
 *                                   `align` can be "left" (default), "center", or "right".
 * @param {Array}    data          - Array of row objects.
 * @param {string}   rowKey        - Property name to use as the React key (default: "_id").
 * @param {boolean}  isLoading     - Show skeleton rows while fetching.
 * @param {number}   currentPage   - Current page number for Pagination.
 * @param {number}   totalPages    - Total pages for Pagination.
 * @param {Function} onPageChange  - Callback when a page is clicked.
 * @param {string}   emptyMessage  - Message shown when data is empty.
 * @param {React.ElementType} emptyIcon - Lucide icon component for the empty state.
 */
export default function DynamicTable({
  columns = [],
  data = [],
  rowKey = "_id",
  isLoading = false,
  currentPage,
  totalPages,
  onPageChange,
  emptyMessage = "No records found.",
  emptyIcon: EmptyIcon = Package,
}) {
  const alignClass = (align) => {
    if (align === "center") return "text-center";
    if (align === "right") return "text-right";
    return "text-left";
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1e1e1e] shadow-sm">
        <table className="w-full text-sm">
          {/* ─── Header ─── */}
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-[#252525]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 ${alignClass(col.align)}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* ─── Body ─── */}
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60">
            {isLoading ? (
              <SkeletonRows columns={columns} count={6} />
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="py-16">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                      <EmptyIcon className="w-7 h-7 text-gray-400 dark:text-gray-600" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                      {emptyMessage}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={row[rowKey] ?? rowIndex}
                  className="group hover:bg-green-50/40 dark:hover:bg-green-900/5 transition-colors duration-150"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`px-5 py-4 text-gray-700 dark:text-gray-300 font-medium ${alignClass(col.align)}`}
                    >
                      {col.render
                        ? col.render(row[col.key], row)
                        : row[col.key] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ─── Pagination ─── */}
      {!isLoading && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}

function SkeletonRows({ columns, count }) {
  return Array.from({ length: count }).map((_, i) => (
    <tr key={i}>
      {columns.map((col) => (
        <td key={col.key} className="px-5 py-4">
          <div
            className="h-4 rounded-md bg-gray-200 dark:bg-gray-700/60 animate-pulse"
            style={{ width: `${50 + Math.random() * 40}%` }}
          />
        </td>
      ))}
    </tr>
  ));
}
