import React from 'react';
import Image from 'next/image';
import menuData from '../../app/menuData'; // Adjust the import path as needed

const ShoppingCart: React.FC = () => {
    // For the purpose of this example, we'll assume each item has a default quantity of 1
    const cartItems = menuData.map(item => ({ ...item, quantity: 1 }));

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className="grid grid-cols-1 gap-4 mb-4">
                {cartItems.map(item => (
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
                            <p className="ml-4 text-gray-500">Qty: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
                <button className="btn btn-success btn-lg">Checkout</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
