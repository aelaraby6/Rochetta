import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Mail, Lock, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { useSignupMutation } from "../store.js/authApi";
import { setCredentials } from "../store.js/authSlice";

import SignUpImg from "../../../assets/Auth/signup.png";
import LoginBg from "../../../assets/Auth/login_background.jpg";

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

export default function Signup() {
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
    <div
      className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div className="absolute inset-0 bg-[#012b01]/70 backdrop-blur-md z-0"></div>

      <div className="relative z-10 w-full max-w-4xl bg-white dark:bg-[#1e1e1e] rounded-[24px] shadow-2xl overflow-hidden flex flex-col md:flex-row transition-colors duration-300">
        <div className="hidden md:flex md:w-1/2 p-8 items-center justify-center bg-gray-50 dark:bg-[#252525]">
          <img
            src={SignUpImg}
            alt="Sign Up"
            className="w-full h-100 max-w-sm rounded-2xl shadow-lg object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative">
          <Link
            to="/"
            className="absolute top-6 left-6 text-gray-500 hover:text-green-600 dark:hover:text-green-400 flex items-center gap-2 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>

          <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 text-center mb-6 mt-4">
            Create An Account
          </h2>

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

          <p className="mt-4 text-center text-gray-600 dark:text-gray-400 font-medium text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 dark:text-green-400 hover:underline font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
