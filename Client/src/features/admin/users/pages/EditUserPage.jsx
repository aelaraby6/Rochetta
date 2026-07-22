import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import toast from "react-hot-toast"; 
import UserForm from "../components/UserForm";
import { useGetUserByIdQuery, useUpdateUserRoleMutation } from "../api/usersApi";

export default function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading: isFetching } = useGetUserByIdQuery(id);
  const [updateUserRole, { isLoading: isUpdating }] = useUpdateUserRoleMutation();

  const handleSubmit = async (formData) => {
    try {
      await updateUserRole({ id, ...formData }).unwrap();
      toast.success("User role updated successfully");
      navigate("/dashboard/users");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update user");
      console.error(error);
    }
  };

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-[#165938]" />
      </div>
    );
  }

  const userData = data?.data || data;

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
            Edit User
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Update user information and role.
          </p>
        </div>
      </div>

      {userData && (
        <UserForm
          initialData={userData}
          onSubmit={handleSubmit}
          isLoading={isUpdating}
        />
      )}
    </div>
  );
}
