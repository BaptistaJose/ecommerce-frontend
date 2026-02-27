"use client"
import { useForm } from "react-hook-form";
import inputLogin from "./types";

export const LoginPage = () => {

const { register, handleSubmit, formState:{errors} } = useForm<inputLogin>();
const onSubmit = (data:inputLogin) =>{
    console.log("Login success", data);
    
}
return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
            <h1 className="text-3xl md:text-5xl font-semibold text-white text-center tracking-tight">Welcome back</h1>
            <p className="text-gray-400 text-center mt-2 mb-8">Login to continue</p>
            <form className="flex flex-col space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
                    className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-medium cursor-pointer">Login</button>
            </form>
        </div>
    </div>
);
};

export default LoginPage;