import React from 'react';
import Image from 'next/image';

interface MenuItemProps {
    image: string;
    name: string;
    description: string;
    price: number;
    onAddToCart: () => void;
}

export function MenuItem({ image, name, description, price, onAddToCart }: MenuItemProps) {
    return (
        <div className="card w-96 h-auto bg-base-100 shadow-xl">
            <div className="flex items-center justify-center px-2 pt-2">
                <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={180}
                    className="rounded-xl mt-5" />
            </div>
            <div className="card-footer mt-auto flex flex-col items-center">
                <div className="card-body flex-grow flex flex-col items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
                <p className="font-bold mb-2 text-xl">${price.toFixed(2)}</p>
                <div className="card-actions mb-5">
                    <button className="btn btn-primary" onClick={onAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
