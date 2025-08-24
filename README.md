# 🚀 My First DApp (Next.js + Ethers.js)

Một DApp đơn giản được xây dựng bằng **Next.js + TypeScript + Ethers.js**.  
Ứng dụng cho phép:
- Kết nối ví MetaMask
- Hiển thị số dư ETH
- Hiển thị số dư token ERC20 (USDT Sepolia testnet)
- Gửi token ERC20 đến ví khác

---

## ⚡️ Demo
👉 [Link demo trên Vercel](https://your-vercel-app-url.vercel.app)  
👉 [Source code trên GitHub](https://github.com/your-username/my-dapp)

---

## 🛠 Tech Stack
- [Next.js](https://nextjs.org/) – Frontend framework
- [TypeScript](https://www.typescriptlang.org/) – Static typing
- [Ethers.js](https://docs.ethers.org/) – Tích hợp blockchain
- [Tailwind CSS](https://tailwindcss.com/) – UI styling

---

## 📂 Cấu trúc project

pxman-dapp/
│── components/
│ ├── ConnectWalletButton.tsx # Component kết nối ví
│ ├── BalanceDisplay.tsx # Hiển thị ETH & Token balance
│ └── TokenTransferForm.tsx # Form gửi token ERC20
│── pages/
│ └── index.tsx # Trang chính (kết hợp các component)
│── package.json
│── README.md

---

## 🚀 Cách chạy local

1. Clone repo
```
git clone https://github.com/your-username/my-dapp.git
cd my-dapp
```

2. Cài dependencies
```
npm install
```

3. Chạy dev server
```
npm run dev
```

4. Mở http://localhost:3000 và kết nối MetaMask (chọn Sepolia testnet).

🔑 Các thông tin quan trọng

Network: Ethereum Sepolia testnet

Token ERC20: USDT testnet (contract address: 0x516de3a7a567d81737e3a46ec4ff9cfd1fcb0136)

Faucet ETH testnet: https://sepoliafaucet.com

## Deploy lên Vercel
```
npm install -g vercel
vercel
```

Hoặc push repo lên GitHub → Import vào Vercel Dashboard.

## Demo UI

Connect Wallet: Đăng nhập bằng MetaMask

Balance Display: Hiển thị ETH & token

Token Transfer Form: Gửi token ERC20 đến ví khác

## Notes

DApp này chỉ chạy trên testnet (Sepolia).

Để test chuyển token, bạn cần ví MetaMask có ETH testnet và USDT testnet.

Đây là project demo cho mục đích học tập & phỏng vấn.