"use client"
import Link from "next/link";
import Image from "next/image";
import { CartContext, CartItem } from "../cartContext";
import { useContext } from "react";
import { useAccount, useDisconnect } from 'wagmi'

import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { ConnectAccount } from '@coinbase/onchainkit/wallet';

export function Header() {
    const { status, address } = useAccount()
    const { disconnect } = useDisconnect()

    const { cartProducts } = useContext(CartContext);
    const totalItems = cartProducts.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);
    const totalPrice = cartProducts.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0).toFixed(2);

    return (

        <div className="navbar bg-base-100 flex justify-between items-center">
            <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                <Link href="/">
                    <div className="logo-container relative w-36 h-14">
                        <Image
                            src="/new-logo.png"
                            alt="Cake Gallery Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>
                <Link href="/menu" className="hover:text-blue-600">Menu</Link>
                <Link href="/about" className="hover:text-blue-600">About</Link>
            </nav>
            <div className="ml-auto flex items-center">
                {status != 'connected' &&
                    <div className="border-2 border-blue-500 rounded-full bold">
                        <ConnectAccount />
                    </div>
                }
                {status === 'connected' && (
                    <button type="button" onClick={() => disconnect()} className="flex items-center">
                        <Avatar address={address} />
                        <div className="flex flex-col text-sm">
                            <b> <Name address={address} /></b>
                        </div>
                    </button>
                )}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{totalItems}</span>
                        </div>
                    </div>

                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{totalItems} Items</span>
                            <span className="text-info">Subtotal: {totalPrice}$</span>
                            <div className="card-actions">
                                <Link href="/cart" className="btn btn-primary btn-block">View cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
