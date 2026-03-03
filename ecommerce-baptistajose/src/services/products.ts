export const getProducts = async (page?: string, limit?:string) => {
    const response =  await fetch(`${process.env.API_URL}/products?page=${page}&limit=${limit}`, {cache: 'no-store'})
    const data = await response.json()
    if (!response.ok) throw new Error (data.message  || 'Failed to fetch products')
    return data
}

export const getProductById = async (id: string) => {
    const response =  await fetch(`${process.env.API_URL}/products/${id}`, {cache: 'no-store'})
    const data = await response.json()
    if (!response.ok) throw new Error (data.message  || 'Failed to fetch product')
    return data
}