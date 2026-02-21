import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Lock, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { useLoginMutation } from "../store.js/authApi";
import { setCredentials } from "../store.js/authSlice";

import LoginImg from "../../../assets/Auth/login.png";
import LoginBg from "../../../assets/Auth/login_background.jpg";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginMutation, { isLoading }] = useLoginMutation();
  const [globalError, setGlobalError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setGlobalError("");
    try {
      const response = await loginMutation(data).unwrap();
      dispatch(setCredentials({ user: response.data, token: response.token }));
      navigate("/");
    } catch (err) {
      setGlobalError(
        err.data?.message || "Invalid email or password. Please try again.",
      );
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
            src={LoginImg}
            alt="Login"
            className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative">
          <Link
            to="/"
            className="absolute top-6 left-6 text-gray-500 hover:text-green-600 dark:hover:text-green-400 flex items-center gap-2 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>

          <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 text-center mb-8 mt-4">
            Welcome Back!
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
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
                <p className="text-red-500 text-sm mt-1 font-semibold">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
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
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 font-semibold">
                  {errors.password.message}
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
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md mt-2"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Login <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 dark:text-gray-400 font-medium">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-green-600 dark:text-green-400 hover:underline font-bold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
