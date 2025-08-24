"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

interface ConnectWalletProps {
    onConnect: (provider: ethers.BrowserProvider, account: string) => void;
    onDisconnect: () => void;
}

export default function ConnectWallet({ onConnect, onDisconnect }: ConnectWalletProps) {
    const [account, setAccount] = useState<string | null>(null);
    const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

    useEffect(() => {
        if (window.ethereum) {
            const p = new ethers.BrowserProvider(window.ethereum);
            setProvider(p);

            // 👇 không dùng any
            window.ethereum.on("accountsChanged", (accs: unknown[]) => {
                if (Array.isArray(accs) && accs.length > 0 && typeof accs[0] === "string") {
                    setAccount(accs[0]);
                    onConnect(p, accs[0]);
                } else {
                    setAccount(null);
                    onDisconnect();
                }
            });
        }
    }, [onConnect, onDisconnect]);

    const connectWallet = async () => {
        if (!provider) return;
        try {
            const accounts: string[] = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            if (accounts.length > 0) {
                setAccount(accounts[0]);
                onConnect(provider, accounts[0]);
            }
        } catch (error) {
            console.error("Kết nối thất bại:", error);
        }
    };

    const disconnectWallet = () => {
        setAccount(null);
        onDisconnect();
    };

    return (
        <div className="p-4 bg-gray-100 rounded text-center">
            {account ? (
                <>
                    <p className="font-bold">Đã kết nối: {account}</p>
                    <button
                        onClick={disconnectWallet}
                        className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Ngắt kết nối
                    </button>
                </>
            ) : (
                <button
                    onClick={connectWallet}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Kết nối ví
                </button>
            )}
        </div>
    );
}
