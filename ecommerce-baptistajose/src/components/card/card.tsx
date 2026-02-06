import React from "react";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}