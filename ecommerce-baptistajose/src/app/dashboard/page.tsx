import { Card } from "@/components/card/page";
import { getProducts } from "@/services/products";
import { Product } from "@/types/product";
import React from "react";

export const Dashboard: React.FC = async() => {
const products:Product[] =  await getProducts('1', '20')
    return (
        <main className="min-h-screen pb-5">
            <section className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold mb-10">
                    All Products
                </h1>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                       <Card key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </main>
    )
}
export default Dashboard;