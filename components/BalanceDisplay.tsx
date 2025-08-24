import { useEffect, useState } from "react";
import { ethers } from "ethers";

interface Props {
    account: string;
    provider: ethers.BrowserProvider;
}

export default function BalanceDisplay({ account, provider }: Props) {
    const [balance, setBalance] = useState<string>("0");

    useEffect(() => {
        const fetchBalance = async () => {
            const raw = await provider.getBalance(account);
            setBalance(ethers.formatEther(raw));
        };
        fetchBalance();
    }, [account, provider]);

    return (
        <div className="p-4 bg-green-100 rounded-xl text-center">
            <h2 className="font-bold">ETH Balance</h2>
            <p>{balance} ETH</p>
            <p className="text-xs break-all">{account}</p>
        </div>
    );
}
