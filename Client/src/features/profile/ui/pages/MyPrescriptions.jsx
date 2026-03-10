import { useState } from "react";
import { FileText, Clock, CheckCircle, XCircle } from "lucide-react";

export default function MyPrescriptions() {
  const [prescriptions, setPrescriptions] = useState([
    {
      _id: "RX-982374",
      date: "2026-03-08T10:30:00Z",
      status: "approved",
      notes: "Valid for 3 months. Refill available.",
    },
    {
      _id: "RX-102938",
      date: "2026-03-09T14:20:00Z",
      status: "pending",
      notes: "Awaiting pharmacist review.",
    },
    {
      _id: "RX-564738",
      date: "2026-02-15T09:15:00Z",
      status: "rejected",
      notes: "Image unclear. Please upload a better quality image.",
    },
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return (
          <span className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-3 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider border border-green-200 dark:border-green-800/50">
            <CheckCircle className="w-4 h-4" /> Approved
          </span>
        );
      case "pending":
        return (
          <span className="flex items-center gap-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 px-3 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider border border-yellow-200 dark:border-yellow-800/50">
            <Clock className="w-4 h-4" /> Pending
          </span>
        );
      case "rejected":
        return (
          <span className="flex items-center gap-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-500 px-3 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider border border-red-200 dark:border-red-800/50">
            <XCircle className="w-4 h-4" /> Rejected
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="animate-in fade-in duration-300">
      <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
          My Prescriptions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Track and view details of your previously uploaded prescriptions.
        </p>
      </div>

      {prescriptions.length === 0 ? (
        <div className="bg-gray-50 dark:bg-[#252525] rounded-3xl border border-gray-100 dark:border-gray-800 p-12 text-center flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-white dark:bg-[#1e1e1e] rounded-full flex items-center justify-center shadow-sm mb-6">
            <FileText className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            No Prescriptions Yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            You haven't uploaded any medical prescriptions. Use the "Upload
            Rochetta" button above to add your first one.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {prescriptions.map((rx) => (
            <div
              key={rx._id}
              className="bg-white dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-all hover:shadow-md hover:border-green-300 dark:hover:border-green-700/50"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700">
                    <FileText className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-0.5">
                      {rx._id}
                    </span>
                    <span className="text-gray-900 dark:text-white font-bold">
                      {new Date(rx.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div>{getStatusBadge(rx.status)}</div>
              </div>

              <div className="bg-gray-50 dark:bg-[#1e1e1e] rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-gray-900 dark:text-white">
                    Pharmacist Note:{" "}
                  </span>
                  {rx.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
