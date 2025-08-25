"use client";
import { useState } from "react";
import { ethers } from "ethers";

interface SendEthProps {
    provider: ethers.BrowserProvider | null;
    account: string | null;
}

export default function SendEth({ provider, account }: SendEthProps) {
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [txHash, setTxHash] = useState("");

    const sendEth = async () => {
        try {
            if (!provider || !account) {
                alert("Vui lòng kết nối ví trước!");
                return;
            }

            if (!ethers.isAddress(to)) {
                alert("Địa chỉ ví nhận không hợp lệ!");
                return;
            }

            if (isNaN(Number(amount)) || Number(amount) <= 0) {
                alert("Số lượng ETH phải là số dương hợp lệ!");
                return;
            }

            const signer = await provider.getSigner();
            const balance = await provider.getBalance(account);
            const value = ethers.parseEther(amount); // bigint

            // ✅ Gas
            const gasLimit = BigInt(21000); // bigint literal
            const feeData = await provider.getFeeData();
            const maxFeePerGas = feeData.maxFeePerGas ?? feeData.gasPrice ?? ethers.parseUnits("20", "gwei"); // bigint
            const estimatedFee = gasLimit * maxFeePerGas; // bigint

            // ✅ Kiểm tra tổng số dư
            const totalCost = value + estimatedFee; // bigint
            if (balance < totalCost) {
                alert(`Không đủ ETH để gửi. Tổng cần: ${ethers.formatEther(totalCost)} ETH (gồm phí ${ethers.formatEther(estimatedFee)} ETH)`);
                return;
            }

            // ✅ Thực hiện gửi
            const tx = await signer.sendTransaction({ to, value, gasLimit, maxFeePerGas });
            await tx.wait();

            setTxHash(tx.hash);
            alert("Gửi ETH thành công!");
        } catch (err) {
            console.error(err);
            alert("Gửi ETH thất bại!");
        }
    };

    return (
        <div className="p-4 bg-gray-100 rounded w-full text-center mt-4">
            <p className="font-bold mb-2">Chuyển ETH</p>
            <input
                type="text"
                placeholder="Địa chỉ người nhận"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border p-2 w-full mb-2 rounded"
            />
            <input
                type="text"
                placeholder="Số lượng ETH"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 w-full mb-2 rounded"
            />
            <button
                onClick={sendEth}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Gửi
            </button>

            {txHash && (
                <p className="mt-2 text-green-600 break-all">
                    Tx Hash: {txHash}
                </p>
            )}
        </div>
    );
}
