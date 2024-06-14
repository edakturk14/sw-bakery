"use client"
import { MenuItem } from "../menu/MenuItem";
import menuData from "../../app/menuData";
import { useContext, useState } from "react";
import { CartContext, CartItem } from "../cartContext";

export function MenuPage() {
    const { addToCart } = useContext(CartContext);
    const [showAlert, setShowAlert] = useState(false);

    const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
        addToCart(item);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000); // Hide alert after 3 seconds
    };


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl font-bold italic mb-4 text-center mb-4 mt-3">Menu</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {menuData.map(item => (
                    <MenuItem
                        key={item._id}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        onAddToCart={() => handleAddToCart(item)}
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

export default MenuPage;
