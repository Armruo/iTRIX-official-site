"use client";

import { Web3ConfigProvider } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';

// Create a client
const queryClient = new QueryClient();

// Create wagmi config
const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export default function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiWeb3ConfigProvider config={config}>
        <Web3ConfigProvider>
          {children}
        </Web3ConfigProvider>
      </WagmiWeb3ConfigProvider>
    </QueryClientProvider>
  );
}
