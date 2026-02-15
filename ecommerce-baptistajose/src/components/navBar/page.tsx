"use client"
export const NavBar = () => {
    return (
        <div>
            <header className="flex items-center justify-around p-1 text-white bg-gray-700 ">
                <img src="/vercel.svg" alt="Logo" className="p-3 bg-gray-900 rounded-full w-19 h-15 animate-pulse" />
                <ul className="flex justify-between space-x-4 text-lg">
                    <li><a href="/home" className="anchor-navBar">Home</a></li>
                    <li><a href="/dashboard" className="anchor-navBar">Dashboard</a></li>
                    <li><a href="/cart" className="anchor-navBar">Cart</a></li>
                </ul>
            </header>
        </div>
    )
}

export default NavBar