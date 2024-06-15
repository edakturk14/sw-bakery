"use client";
import { useSendTransaction, useAccount } from 'wagmi';
import { parseEther } from 'viem';
import { useContext, useState, useEffect } from 'react';
import { CartContext, CartItem } from './cartContext';

export function SendTransaction() {
    const { cartProducts, clearCart } = useContext(CartContext);
    const totalPrice = cartProducts.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0).toFixed(2);
    const totalPriceETH = (parseFloat(totalPrice) / 3900).toFixed(6);

    const predefinedAddress = '0x50b153E01B96276539f962776d3A117CBE562adF'; //  bakery address

    const { data: hash, isPending, sendTransaction } = useSendTransaction();
    const [isTransactionConfirmed, setIsTransactionConfirmed] = useState(false);

    const handleSendTransaction = async () => {
        try {
            console.log(`Sending transaction to ${predefinedAddress} with value ${totalPriceETH} ETH`);
            await sendTransaction({ to: predefinedAddress, value: parseEther(totalPriceETH) });
        } catch (error) {
            console.error('Transaction failed', error);
        }
    };

    useEffect(() => {
        if (hash) {
            console.log('Transaction Hash:', hash);
            setIsTransactionConfirmed(true);
            clearCart();
        }
    }, [hash]);

    return (
        <div>
            {!isTransactionConfirmed && (
                <button
                    disabled={isPending}
                    onClick={handleSendTransaction}
                    className="btn btn-primary w-full"
                >
                    {isPending ? 'Confirming...' : 'Pay with Smart Wallet'}
                </button>
            )}
            {hash &&
                <div role="alert" className="alert alert-success mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className='italic'>We got your order! Your cakes are coming 🚗🍰</p>
                </div>
            }
        </div>
    );
}
