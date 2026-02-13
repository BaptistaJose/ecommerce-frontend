"use client"
export const NavBar = () => {
    return (
        <div>
        <header className="bg-gray-700 text-white p-1 flex items-center justify-around ">
            <img src="/vercel.svg" alt="Logo" className="w-19 h-15 bg-gray-900 rounded-full p-3 animate-pulse" />
            <ul className="flex justify-between space-x-4 text-lg">
                <li><a href="/" className="font-serif hover:bg-gray-900 p-2 rounded-md">Home</a></li>
                <li><a href="/dashboard" className="font-serif hover:bg-gray-900 p-2 rounded-md">Dashboard</a></li>
                <li><a href="/cart" className="font-serif hover:bg-gray-900 p-2 rounded-md">Cart</a></li>
            </ul>
        </header>
        </div>
    )
}

export default NavBar