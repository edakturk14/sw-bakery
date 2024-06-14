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
        <div className="card w-96 h-100 bg-base-100 shadow-xl justify-between overflow-hidden">
            <div className="flex items-center justify-center px-2 pt-2">
                <Image
                    src={image}
                    alt={name}
                    width={220}
                    height={144}
                    className="rounded-xl" />
            </div>
            <div className="card-body flex-grow flex flex-col items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
            <div className="card-footer mt-auto flex flex-col items-center text-center">
                <p className="font-bold mb-2 text-xl">${price.toFixed(2)}</p>
                <div className="card-actions mb-5">
                    <button className="btn btn-primary" onClick={onAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
