export interface Product {
    id: string;
    name: string;
    description: string;
    stock: number;
    imgUrl: string;
    category: Category
}

export interface Category {
    id: string;
    name: string
}

