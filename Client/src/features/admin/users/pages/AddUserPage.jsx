import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import UserForm from "../components/UserForm";
import { useCreateUserMutation } from "../api/usersApi";
import toast from "react-hot-toast";

export default function AddUserPage() {
  const navigate = useNavigate();
  const [createUser, { isLoading }] = useCreateUserMutation();

  const handleSubmit = async (formData) => {
    try {
      const res = await createUser(formData).unwrap();
      toast.success(res.message || "User created successfully!");
      navigate("/dashboard/users");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to create user");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/dashboard/users")}
          className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Add New User
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Create a new user account and assign roles.
          </p>
        </div>
      </div>

      <UserForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
