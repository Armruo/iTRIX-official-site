"use client";

import React from 'react';
import { 
    SolanaWeb3ConfigProvider,
    PhantomWallet,
    SolflareWallet,
    OKXWallet,
    BackpackWallet,
    WalletConnectWallet,
    CoinbaseWallet,
    TrustWallet
 } from '@ant-design/web3-solana';


import { primaryColor } from '@/utils/css';
import { ConfigProvider } from 'antd';

const walletConnectProjectId = '163d82f84c2f17748a8eb28340497988';

const CommonWeb3Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
return (
    <ConfigProvider
    theme={{
        token: {
        colorPrimary: primaryColor,
        },
        components: {
        Menu: {
            darkItemSelectedBg: 'transparent',
        },
        Modal: {
            contentBg: '#f0ffff',
        },
        },
    }}
    >
    <SolanaWeb3ConfigProvider
        walletConnect={{ projectId: walletConnectProjectId }}
        wallets={[
            PhantomWallet(), 
            SolflareWallet(), 
            BackpackWallet(),
            WalletConnectWallet(),
            CoinbaseWallet(),
            TrustWallet(),
            OKXWallet()
        ]}
        autoConnect={true}
    >
        {children}
    </SolanaWeb3ConfigProvider>
    </ConfigProvider>
);
};

export default CommonWeb3Layout;
