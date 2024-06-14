'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext, CartItem } from "../cartContext"; // Adjust the import path

const ShoppingCart: React.FC = () => {
    const { cartProducts, removeCartProduct } = useContext(CartContext);

    const total = cartProducts.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className="grid grid-cols-1 gap-4 mb-4">
                {cartProducts.map((item: CartItem, index: number) => (
                    <div key={item._id} className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div className="flex items-center">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="rounded-lg"
                            />
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                            <button
                                className="ml-4 btn btn-danger"
                                onClick={() => removeCartProduct(index)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
                <Link href="/cart/checkout">
                    <button className="btn btn-success btn-lg">Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ShoppingCart;
