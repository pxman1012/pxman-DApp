"use client";

import { useEffect, useState } from "react";

interface Props {
    onConnect: (acc: string) => void;
    onDisconnect: () => void;
    connectedAccount: string;
}

export default function ConnectWallet({ onConnect, onDisconnect, connectedAccount }: Props) {
    const [isConnecting, setIsConnecting] = useState(false);

    const connect = async () => {
        try {
            setIsConnecting(true);
            if (!(window as any).ethereum) {
                alert("Bạn cần cài MetaMask!");
                return;
            }
            const accounts: string[] = await (window as any).ethereum.request({
                method: "eth_requestAccounts",
            });
            if (accounts.length > 0) {
                onConnect(accounts[0]);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsConnecting(false);
        }
    };

    return (
        <div className="p-4 bg-gray-100 rounded-xl text-center">
            {connectedAccount ? (
                <div>
                    {/* <p className="mb-2 break-all">Đã kết nối tài khoản: {connectedAccount}</p> */}
                    <p className="mb-2 break-all">Đã kết nối</p>
                    <button
                        onClick={onDisconnect}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Huỷ kết nối
                    </button>
                </div>
            ) : (
                <button
                    onClick={connect}
                    disabled={isConnecting}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {isConnecting ? "Đang kết nối..." : "Kết nối ví"}
                </button>
            )}
        </div>
    );
}
