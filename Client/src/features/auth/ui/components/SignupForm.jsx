import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Mail, Lock, Loader2, ArrowRight } from "lucide-react";
import { useSignupMutation } from "../../store/authApi";
import { setCredentials } from "../../store/authSlice";

const signupSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters").trim(),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address")
      .trim()
      .toLowerCase(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signupMutation, { isLoading }] = useSignupMutation();
  const [globalError, setGlobalError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    setGlobalError("");
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const response = await signupMutation(payload).unwrap();
      dispatch(setCredentials({ user: response.data, token: response.token }));
      navigate("/profile");
    } catch (err) {
      setGlobalError(err.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 text-sm">
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            {...register("name")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2c2c2c] text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
            placeholder="Enter your full name"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-xs mt-1 font-semibold">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 text-sm">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            {...register("email")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2c2c2c] text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
            placeholder="Enter your email"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 font-semibold">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 text-sm">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            {...register("password")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2c2c2c] text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
            placeholder="Create a password"
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs mt-1 font-semibold">
            {errors.password.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 text-sm">
          Confirm Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            {...register("confirmPassword")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2c2c2c] text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
            placeholder="Confirm your password"
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1 font-semibold">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {globalError && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-center font-semibold text-sm">
          {globalError}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full mt-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Create Account <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
