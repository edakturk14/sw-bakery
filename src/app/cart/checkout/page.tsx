"use client";
import { CheckoutPage } from '@/components/layout/CheckoutPage';
import React from 'react';

const Checkout: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 mt-8">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <CheckoutPage />
        </div>
    );
};

export default Checkout;
