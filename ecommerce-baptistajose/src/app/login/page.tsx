"use client"
import { useForm } from "react-hook-form";
import inputLogin from "./types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/auth";
import { saveToken } from "@/utils/auth";
import { useAuth } from "@/context/AuthContext";
import { setAuthCookie } from "@/utils/cookies";
import { decodeToken } from "@/utils/decodeToken";

export const LoginPage = () => {
    const { login, setUser } = useAuth()
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<inputLogin>();

    const onSubmit = async (data: inputLogin) => {
        try {
            setLoading(true);
            setServerError(null);

            const token = await loginUser(data);
            saveToken(token);
            setAuthCookie(token)
            const decodedToken = decodeToken(token)
            setUser(decodedToken);
            localStorage.setItem("user", JSON.stringify(decodedToken));
            login();
            reset();
            router.push("/dashboard");

        } catch (error: any) {
            setServerError(error.message);
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
            <div className="w-full max-w-md">
                <h1 className="text-3xl md:text-5xl font-semibold text-white text-center tracking-tight">Welcome back</h1>
                <p className="text-gray-400 text-center mt-2 mb-8">Login to continue</p>
                <form className="flex flex-col space-y-5" onSubmit={handleSubmit(onSubmit)}>

                    {serverError && (<div className="bg-red-500/20 text-red-400 p-3 rounded-lg text-sm">{serverError}</div>)}

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                            {...register("email", { required: "Email is required" })} />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="password" className="text-sm text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                            {...register("password", { required: "Password is required" })} />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-medium cursor-pointer">
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;