import { Card } from "@/components/card/page";
import { productsMock } from "@/utils/products.mock";
import React from "react";

export const Dashboard: React.FC = () => {
    return (
        <main className="min-h-screen pb-5">
            <section className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold mb-10">
                    All Products
                </h1>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                    {productsMock.map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </main>
    )
}
export default Dashboard;