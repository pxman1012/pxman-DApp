"use client";

import { useState } from "react";
import { ethers } from "ethers";
import ConnectWallet from "@/components/ConnectWallet";
import BalanceDisplay from "@/components/BalanceDisplay";
import SendEth from "@/components/SendEth";

export default function HomePage() {
    const [account, setAccount] = useState<string>("");
    const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

    const handleConnect = async (acc: string) => {
        setAccount(acc);
        if ((window as any).ethereum) {
            const p = new ethers.BrowserProvider((window as any).ethereum);
            setProvider(p);
        }
    };

    const handleDisconnect = () => {
        setAccount("");
        setProvider(null);
    };

    return (
        <div className="max-w-md mx-auto p-6 space-y-6">
            <ConnectWallet
                onConnect={handleConnect}
                onDisconnect={handleDisconnect}
                connectedAccount={account}
            />

            {account && provider && (
                <>
                    <BalanceDisplay account={account} provider={provider} />
                    <SendEth account={account} provider={provider} />
                </>
            )}
        </div>
    );
}
