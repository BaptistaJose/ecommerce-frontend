import { getProductById } from "@/services/products"
import { notFound } from "next/navigation"

export default async function ProductDetail({ params }: { params: { id: string } }) {
    try {
        const { id } = await params
        const product = await getProductById(id)
        return (
            <section>
                <section className="min-h-screen bg-slate-900 px-6 md:px-12 lg:px-24 py-16 text-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-slate-800 rounded-2xl p-6 flex items-center justify-center">
                            <img src={product.imgUrl} alt={product.name} className="max-h-96 object-contain" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                {product.name}
                            </h1>                    <p className="text-3xl text-blue-500 font-semibold mt-6">
                                ${product.price}
                            </p>                    <p className="text-gray-400 mt-2">
                                Stock available: {product.stock}
                            </p>                    <div className="mt-8 border-t border-slate-700 pt-6">
                                <h2 className="text-xl font-semibold mb-3">
                                    Description
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                            <button className="mt-10 bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-medium">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        )
    } catch (error) {
      notFound()
    }

}
