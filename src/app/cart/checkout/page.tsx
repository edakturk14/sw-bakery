"use client";
import { AddressInput } from '@/components/layout/AddressInput';
import React from 'react';

const Checkout: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 mt-8">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <AddressInput />
        </div>
    );
};

export default Checkout;
