"use client";
import { useState } from "react";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                <img
                    src="/vercel.svg"
                    alt="Logo"
                    className="w-12 h-12 p-2 bg-slate-800 rounded-full"
                />

                <ul className="hidden md:flex items-center gap-8 text-slate-300 text-lg font-medium">
                    <li><a href="/home" className="anchor-navBar">Home</a></li>
                    <li><a href="/dashboard" className="anchor-navBar">Dashboard</a></li>
                    <li>
                        <a
                            href="/cart"
                            className="anchor-navBar"
                        >
                            Cart
                        </a>
                    </li>
                </ul>
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-slate-900 border-t border-white/10 px-6 py-6 space-y-6 text-slate-300 text-lg">
                    <a href="/home" className="block hover:text-white">Home</a>
                    <a href="/dashboard" className="block hover:text-white">Dashboard</a>
                    <a href="/cart" className="block bg-blue-600 text-white px-4 py-2 rounded-xl text-center">
                        Cart
                    </a>
                </div>
            )}
        </header>
    );
};

export default NavBar