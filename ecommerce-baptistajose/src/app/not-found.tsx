import Link from "next/link"

export const NotFound = () => {
    return (
        <div>
        <h1>Not Found 404.</h1>
        <p>La información que tratas de buscar no existe.</p>
        <Link href="/">Volver a la tienda</Link>
        </div>
    )
}

export default NotFound