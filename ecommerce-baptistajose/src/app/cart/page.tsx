"use client"

import { useCart } from "@/context/CartContext"
import { useAuth } from "@/context/AuthContext"

export default function CartPage() {
    const { cart, removeFromCart } = useCart()
    const {user} = useAuth()
    const subtotal = cart.reduce((total, item) => total + Number(item.price), 0)
    if (cart.length === 0) {
        return (
            <section className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
                <h1 className="text-2xl font-semibold">
                    Your cart is empty
                </h1>
            </section>
        )
    }

    const handleCheckout = async () => {
        const token = localStorage.getItem("token")
        const orderData = {
            userId: user?.id,
            products: cart.map(product => ({
                id: product.id
            }))
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(orderData)
        })

        const data = await response.json()

        console.log(data)
    }

    return (
        <section className="min-h-screen bg-slate-900 px-6 md:px-12 lg:px-24 py-16 text-white">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold mb-10">
                    Shopping Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-6">

                        {cart.map(item => (

                            <div
                                key={item.id}
                                className="bg-slate-800 rounded-xl p-6 flex flex-col sm:flex-row gap-6 sm:items-center"
                            >

                                <img
                                    src={item.imgUrl}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-lg border border-slate-700"
                                />

                                <div className="flex-1">

                                    <h2 className="text-lg font-semibold">
                                        {item.name}
                                    </h2>

                                    <p className="text-gray-400">
                                        ${item.price}
                                    </p>

                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm w-full sm:w-auto transition"
                                >
                                    Remove
                                </button>

                            </div>

                        ))}

                    </div>

                    <div className="bg-slate-800 rounded-xl p-6 h-fit">

                        <h2 className="text-xl font-semibold mb-6">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-4 text-gray-400">
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </div>

                        <div className="flex justify-between mb-4 text-gray-400">
                            <span>Shipping</span>
                            <span>$0</span>
                        </div>

                        <div className="border-t border-slate-700 my-4"></div>

                        <div className="flex justify-between text-lg font-semibold">
                            <span>Total</span>
                            <span className="text-blue-500">
                                ${subtotal}
                            </span>
                        </div>

                        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-medium"
                            onClick={handleCheckout}>
                            Checkout
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}