'use client'
import { Card } from "@/components/Card/Card";
import { Product } from "@/components/Card/types";
import { productsMock } from "@/utils/products.mock";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
        setProducts(data.data)
      } catch (error: any) {
        console.log(error.message);
      }
    }
    getProducts()
  }, [])
  return (
    <main className="min-h-screen bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {products.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </main>
  );
}

