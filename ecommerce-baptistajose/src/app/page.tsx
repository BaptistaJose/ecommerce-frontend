import { Card } from "@/components/Card/Card";
import { Product } from "@/components/Card/types";
import { productsMock } from "@/utils/products.mock";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {productsMock.map((product, index) => (
        <Card key={index} {...product}/>
      ))}
    </main>
  );
}

