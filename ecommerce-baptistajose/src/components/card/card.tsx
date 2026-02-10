import React from "react";
import { Product } from "./types";

export const Card: React.FC<Product> = (props) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800">
                {props.name}
            </h1>

            <p className="text-black mt-2">
                {props.description}
            </p>

            <p className="text-black mt-2">
                {props.price}
            </p>

            <h6 className="text-2xl font-bold text-gray-800">Stock:</h6>
            <br/>
            <p className="text-black"> {props.stock}</p>
            <p className="text-black">
                {props.category}
            </p>
        </div>
    )
}

export default Card;