import { useSelector } from "react-redux";

export default function PersonalInfo() {
  const { user } = useSelector((state) => state.auth);

  if (!user) return null;

  const profileFields = [
    { label: "Name", value: user.name || user.username || "Not specified" },
    { label: "Date of birth", value: user.dateOfBirth || "Not specified" },
    { label: "Gender", value: user.gender || "Not specified" },
    { label: "Address", value: user.address || "Not specified" },
    { label: "Primary phone", value: user.phone || "Not specified" },
    { label: "Communications email", value: user.email || "Not specified" },
    { label: "Sign-in email", value: user.email || "Not specified" },
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
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 px-8 rounded-full active:scale-95 shadow-md">
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