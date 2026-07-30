import { useState } from "react";
import { Brain, Boxes, ArrowRight } from "lucide-react";

export default function AITab({ clusters, userAssignments, bundles }) {
  const [selectedClusterIndex, setSelectedClusterIndex] = useState(null);

  const clusterColors = [
    { text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-100 dark:bg-emerald-950/30", bar: "bg-emerald-600" },
    { text: "text-green-700 dark:text-green-400", bg: "bg-green-100 dark:bg-green-950/30", bar: "bg-green-700" },
    { text: "text-teal-600 dark:text-teal-400", bg: "bg-teal-100 dark:bg-teal-950/30", bar: "bg-teal-600" },
  ];

  const filteredUsers =
    selectedClusterIndex !== null
      ? userAssignments.filter((ua) => ua.clusterIndex === selectedClusterIndex)
      : userAssignments;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left 2 Cols: Customer Segments */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-emerald-600" />
              Customer Segments (K-Means Clustering)
            </h3>
            <p className="text-xs text-gray-500">
              Clusters active customers based on RFM: Recency (days since last order), Frequency (orders count), and Monetary (total spend)
            </p>
          </div>

          {clusters.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              Insufficient customer transactions to partition segments.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
             
              {clusters.map((cluster) => {
                const color = clusterColors[cluster.index % clusterColors.length];
                const isSelected = selectedClusterIndex === cluster.index;
                return (
                  <div
                    key={cluster.index}
                    onClick={() =>
                      setSelectedClusterIndex(isSelected ? null : cluster.index)
                    }
                    className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
                      isSelected
                        ? "border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/10"
                        : "border-gray-100 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-900 bg-gray-50/50 dark:bg-[#252525]/30"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${color.bg} ${color.text}`}>
                        {cluster.label}
                      </span>
                      <span className="text-xs font-bold text-gray-400">
                        {cluster.percentage}%
                      </span>
                    </div>
                    <p className="text-2xl font-black text-gray-900 dark:text-white my-2">
                      {cluster.count}{" "}
                      <span className="text-xs font-normal text-gray-400">users</span>
                    </p>
                    <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400 mt-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                      <div>Monetary: ~{cluster.centroid.monetary} EGP</div>
                      <div>Frequency: ~{cluster.centroid.frequency} orders</div>
                      <div>Recency: ~{cluster.centroid.recency} days ago</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* User assignments list */}
          {userAssignments.length > 0 && (
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {selectedClusterIndex !== null ? `Members of Cluster` : "All Segments Assignments"}
                </span>
                {selectedClusterIndex !== null && (
                  <button
                    onClick={() => setSelectedClusterIndex(null)}
                    className="text-xs text-emerald-600 hover:underline font-bold"
                  >
                    Clear filter
                  </button>
                )}
              </div>
              <div className="max-h-[220px] overflow-y-auto border border-gray-100 dark:border-gray-800 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50 dark:bg-[#2c2c2c] text-gray-600 dark:text-gray-400 font-bold sticky top-0">
                    <tr>
                      <th className="p-2.5 pl-4">Customer</th>
                      <th className="p-2.5">Recency (Days)</th>
                      <th className="p-2.5">Frequency</th>
                      <th className="p-2.5">Spend</th>
                      <th className="p-2.5 pr-4 text-right">Segment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                    {filteredUsers.map((ua) => {
                      const cColor = clusterColors[ua.clusterIndex % clusterColors.length] || clusterColors[0];
                      return (
                        <tr key={ua.userId} className="hover:bg-gray-50/50 dark:hover:bg-gray-850/20">
                          <td className="p-2.5 pl-4">
                            <div className="font-semibold">{ua.user?.name}</div>
                            <div className="text-[10px] text-gray-400">{ua.user?.email}</div>
                          </td>
                          <td className="p-2.5">{ua.recency}</td>
                          <td className="p-2.5">{ua.frequency} orders</td>
                          <td className="p-2.5">{ua.monetary} EGP</td>
                          <td className="p-2.5 pr-4 text-right">
                            <span className={`font-bold ${cColor.text}`}>
                              {ua.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Frequently Bought Together bundles */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm h-full">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Boxes className="w-5 h-5 text-emerald-600" />
              Frequently Bought Together (Apriori AI)
            </h3>
            <p className="text-xs text-gray-500">
              Discovers strong association rules between products purchased in single carts
            </p>
          </div>

          <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-1">
            {bundles.length === 0 ? (
              <div className="py-20 text-center text-gray-400 text-sm">
                No strong association bundles found in historical carts.
              </div>
            ) : (
              bundles.map((bundle, i) => (
                <div
                  key={i}
                  className="p-3 border border-gray-100 dark:border-gray-800/80 rounded-xl bg-gray-50/40 dark:bg-[#252525]/20 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 min-w-0 flex-1">
                      <span className="font-semibold text-gray-900 dark:text-white text-xs truncate max-w-[120px]">
                        {bundle.antecedentProduct?.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="font-semibold text-gray-900 dark:text-white text-xs truncate max-w-[120px]">
                        {bundle.consequentProduct?.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 shrink-0">
                      Lift: {bundle.lift}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-400 mb-0.5">
                        <span>Confidence (Conditional Probability)</span>
                        <span>{Math.round(bundle.confidence * 100)}%</span>
                      </div>
                      <div className="h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${bundle.confidence * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-[9px] text-gray-400">
                      <span>Support (Frequency in total orders)</span>
                      <span>{Math.round(bundle.support * 100)}%</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
