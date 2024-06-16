'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { config } from '@/wagmi'
import '@coinbase/onchainkit/styles.css';

import { baseSepolia } from 'viem/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';

export function Providers(props: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <OnchainKitProvider chain={baseSepolia}>
                    {props.children}
                </OnchainKitProvider>
            </QueryClientProvider>
        </WagmiProvider>

    )
}