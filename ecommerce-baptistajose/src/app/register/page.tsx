"use client"
import { useForm } from "react-hook-form";
import { inputRegister } from "./types";

export const RegisterPage = () => {
const { register, watch, handleSubmit, formState: { errors } } = useForm<inputRegister>();
const passwordValue = watch("password")
const onSubmit = (data: inputRegister) => {
    console.log("Datos Válidos", data);
}
return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
            <h1 className="text-3xl md:text-5xl font-semibold text-white text-center tracking-tight">Create an account</h1>
            <p className="text-gray-400 text-center mt-2 mb-8">Register to continue</p>
            <form className="flex flex-col space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="name" className="text-sm text-gray-300">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="email" className="text-sm text-gray-300">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                        {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" } })} />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="password" className="text-sm text-gray-300">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                        {...register("password", { required: "Password is required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password must be at least 8 characters long and include uppercase, lowercase, number and special character" } })} />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="confirmPassword" className="text-sm text-gray-300">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required", validate: (value) => {
                                return value === passwordValue || "Passwords do not match";
                            }
                        })} />
                    {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-medium cursor-pointer">Register</button>
            </form>
        </div>
    </div>
)
}
export default RegisterPage;