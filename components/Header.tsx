// components/Header.tsx

'use client'; // Đảm bảo đây là component client-side
import Link from "next/link";
import { usePathname } from "next/navigation"; // Next.js 15 app router
import { useEffect, useState } from "react";

// Định nghĩa type cho menu item
type MenuItem = {
    name: string;
    href: string;
};

// Tạo const menu
const menu: MenuItem[] = [
    { name: "Wallet", href: "/" },
    { name: "Trading View", href: "/trading-view" },
    { name: "Lightweight Chats", href: "/lightweight-charts" },
];

export default function Header() {
    const pathname = usePathname(); // để highlight active link

    const [mounted, setMounted] = useState(false);

    // Đánh dấu khi component đã mount
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex gap-4">
                {menu.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`hover:text-gray-300 ${mounted && pathname === item.href ? "text-yellow-400" : ""}`}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
