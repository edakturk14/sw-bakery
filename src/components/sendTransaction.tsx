"use client";
import * as React from 'react';
import { useSendTransaction, useAccount } from 'wagmi';
import { parseEther } from 'viem';
import { useContext } from 'react';
import { CartContext, CartItem } from './cartContext';

export function SendTransaction() {
    const { cartProducts } = useContext(CartContext);
    const totalPrice = cartProducts.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0).toFixed(2);
    const totalPriceETH = (parseFloat(totalPrice) / 3900).toFixed(6);

    const predefinedAddress = '0x50b153E01B96276539f962776d3A117CBE562adF'; //  bakery address

    const { data: hash, isPending, sendTransaction } = useSendTransaction();

    const handleSendTransaction = async () => {
        try {
            console.log(`Sending transaction to ${predefinedAddress} with value ${totalPriceETH} ETH`);
            await sendTransaction({ to: predefinedAddress, value: parseEther(totalPriceETH) });
        } catch (error) {
            console.error('Transaction failed', error);
        }
    };

    React.useEffect(() => {
        if (hash) {
            console.log('Transaction Hash:', hash);
        }
    }, [hash]);

    return (
        <div className="p-4">
            <button
                disabled={isPending}
                onClick={handleSendTransaction}
                className="btn btn-primary w-full"
            >
                {isPending ? 'Confirming...' : 'Pay with Smart Wallet'}
            </button>
            {hash && <div className="mt-4">Transaction Hash: {hash}</div>}
        </div>
    );
}
