"use client"
import { useForm } from "react-hook-form";
import { inputRegister } from "./types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser } from "@/services/auth";

export const RegisterPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const { register, watch, handleSubmit, reset, formState: { errors } } = useForm<inputRegister>();
    const passwordValue = watch("password")

    const onSubmit = async (data: inputRegister) => {
        try {
            setLoading(true);
            setServerError(null);

            await registerUser(data);

            reset();
            router.push("/login");

        } catch (error: any) {
            setServerError(error.message);
        } finally {
            setLoading(false);
        }
    };
      return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-semibold text-white text-center">
          Create an account
        </h1>

        <form
          className="flex flex-col space-y-5 mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          {serverError && (
            <div className="bg-red-500/20 text-red-400 p-3 rounded-lg text-sm">
              {serverError}
            </div>
          )}

          <input
            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}

          <input
            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
            placeholder="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}

          <input
            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
            placeholder="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span className="text-red-400 text-sm">{errors.password.message}</span>}

          <input
            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
            placeholder="Confirm Password"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-400 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-medium disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;