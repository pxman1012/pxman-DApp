"use client";
import { useState } from "react";
import { ethers } from "ethers";
import ConnectWallet from "../components/ConnectWallet";
import BalanceDisplay from "../components/BalanceDisplay";
import SendEth from "../components/SendEth";

export default function Home() {
    const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
    const [account, setAccount] = useState<string | null>(null);

    const handleConnect = (prov: ethers.BrowserProvider, acc: string) => {
        setProvider(prov);
        setAccount(acc);
    };

    const handleDisconnect = () => {
        setProvider(null);
        setAccount(null);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 gap-6 max-w-[600px] mx-auto">
            <ConnectWallet onConnect={handleConnect} onDisconnect={handleDisconnect} />
            {account && provider &&
                <>
                    <BalanceDisplay provider={provider} account={account} />
                    <SendEth provider={provider} account={account} />
                </>
            }
        </main>
    );
}
