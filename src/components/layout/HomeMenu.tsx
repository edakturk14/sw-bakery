"use client"
import { MenuItem } from "../menu/MenuItem";
import menuData from "../../app/menuData";
import { useState } from "react";

export function HomeMenu() {
    const [showAlert, setShowAlert] = useState(false);

    const handleAddToCart = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
    };

    return (
        <div className="justify-center items-center mx-20 mt-4">
            <h2 className="text-xl font-bold text-gray-500 mb-1 text-center">Checkout</h2>
            <h1 className="text-5xl font-bold italic mb-4 text-center">Our BestSellers</h1>
            <div className="flex flex-wrap justify-center mx-5 my-5 space-x-8 space-y-5 mx-30 w-full">
                {menuData.map(item => (
                    <MenuItem
                        key={item._id}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            {showAlert && (
                <div className="fixed bottom-5 right-5">
                    <div role="alert" className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Item added!</span>
                    </div>
                </div>
            )}
        </div>
    );
}
