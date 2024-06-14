'use client';
import { createContext, useEffect, useState, ReactNode } from 'react';

export interface CartItem {
    _id: string;
    image: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export const CartContext = createContext<any>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

    const ls = typeof window !== 'undefined' ? window.localStorage : null;

    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart')!));
        }
    }, []);

    function clearCart() {
        setCartProducts([]);
        saveCartProductsToLocalStorage([]);
    }

    function removeCartProduct(indexToRemove: number) {
        setCartProducts(prevCartProducts => {
            const newCartProducts = prevCartProducts.filter((_, index) => index !== indexToRemove);
            saveCartProductsToLocalStorage(newCartProducts);
            return newCartProducts;
        });
    }

    function saveCartProductsToLocalStorage(cartProducts: CartItem[]) {
        if (ls) {
            ls.setItem('cart', JSON.stringify(cartProducts));
        }
    }

    function addToCart(product: Omit<CartItem, 'quantity'>) {
        setCartProducts(prevProducts => {
            const cartProduct = { ...product, quantity: 1 };
            const newProducts = [...prevProducts, cartProduct];
            saveCartProductsToLocalStorage(newProducts);
            return newProducts;
        });
    }

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, addToCart, removeCartProduct, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
