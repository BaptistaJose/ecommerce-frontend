"use client"
import { useAuth } from "@/context/AuthContext"
import { CartItem, useCart } from "@/context/CartContext"

export default function AddToCartButton(product: CartItem) {
  const { logged } = useAuth()
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    if (!logged) {
      alert("You must be logged in to add items to the cart.")
      return
    }
    addToCart(product)
  }

  return (
    <button
      className="mt-10 bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-medium"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  )
}