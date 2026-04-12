import { useGetMeQuery } from "../../store/userApi";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function PersonalInfo() {
  const { data: response, isLoading, isError } = useGetMeQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-green-600" />
      </div>
    );
  }

  if (isError || !response?.data) return null;

  const userData = response.data;

  const profileFields = [
    { label: "Name", value: userData.name || "Not specified" },
    {
      label: "Date of birth",
      value: userData.date_of_birth || "Not specified",
    },
    { label: "Gender", value: userData.gender || "Not specified" },
    { label: "Address", value: "Address feature pending Backend update" },
    { label: "Primary phone", value: userData.phone || "Not specified" },
    {
      label: "Communications email",
      value: userData.communications_email || "Not specified",
    },
    { label: "Sign-in email", value: userData.email || "Not specified" },
  ];

  return (
    <div className="animate-in fade-in duration-300">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Profile
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Manage profile details and keep your account up-to-date.
        </p>
      </div>

      <div className="bg-white dark:bg-[#252525] rounded-3xl border border-gray-100 dark:border-gray-800 p-8 shadow-sm">
        <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-6 mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Personal & contact information
          </h3>
          <button
            onClick={() => toast("Update Modal will open here")}
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 px-8 rounded-full transition-all active:scale-95 shadow-md"
          >
            Edit
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {profileFields.map((field, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                {field.label}
              </span>
              <span className="text-base text-gray-700 dark:text-gray-300">
                {field.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
