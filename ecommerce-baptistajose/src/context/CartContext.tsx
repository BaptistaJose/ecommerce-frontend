"use client";

import { createContext, useContext, useState } from "react";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    imgUrl: string;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: CartItem) => {
        setCart([...cart, product]);
    }
    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }

    return context;
}