import React from "react";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({ imageUrl, name, description, price, stock }) => {
    return (
    <div className="bg-slate-400 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-contain p-4 backdrop-blur-md bg-slate-900/70"
      />

      <div className="p-4 flex flex-col justify-between h-full">
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-900 mt-1 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-xl font-bold text-gray-900">${price}</p>
          <p className="text-sm text-gray-800">Stock: {stock}</p>

          <button className="w-full mt-3 py-2 bg-gray-800 text-white rounded-xl transition-all duration-300 hover:bg-gray-700">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};