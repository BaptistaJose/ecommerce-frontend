import { Card } from "@/components/card/page"
import { productsMock } from "@/utils/products.mock"
import Link from "next/link"

export const Home = () => {
    const products = productsMock.slice(0, 4)
    return (
        <section className="flex flex-col min-h-screen px-6 md:px-12 lg:px-24">
            <div className="text-center mt-16 mb-14 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold">
                    The Best Technology Products
                </h1>

                <p className="mt-4 text-gray-400 text-lg md:text-xl">
                    Discover premium smartphones, monitors and accessories in one place.
                </p>
            </div>
            <div className="mt-24 w-full">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold">
                        Featured Products
                    </h2>
                    <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                        View All →
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mb-6">
                {products.map(product => (
                    <div key={product.id}>
                        <Card
                            imageUrl={product.imageUrl}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            stock={product.stock}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Home