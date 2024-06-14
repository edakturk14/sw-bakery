"use client";
import { useAccount } from "wagmi";
import ShoppingCart from "../../components/layout/ShoppingCart";

export default function Cart() {
    return (
        <div className="max-w-3xl mx-auto p-8 mt-8">
            <ShoppingCart />
        </div>
    );
}