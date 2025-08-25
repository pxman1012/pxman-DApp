"use client";

import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";

export default function PollingCandlestickChart() {
    const containerRef = useRef(null);
    const seriesRef = useRef(null);
    const [candles, setCandles] = useState([]);

    useEffect(() => {
        if (!containerRef.current) return;

        // Tạo chart
        const chart = createChart(containerRef.current, {
            width: 600,
            height: 300,
            layout: { background: { color: "#fff" }, textColor: "#333" },
        });

        // Tạo series nến
        seriesRef.current = chart.addSeries(CandlestickSeries);

        // Hàm fetch dữ liệu mới
        const fetchData = async () => {
            const res = await fetch("/api/fake-price");
            const candle = await res.json();
            setCandles((prev) => [...prev, candle]);
            seriesRef.current.update(candle);
        };

        // Fetch ban đầu
        fetchData();

        // Polling mỗi 3 giây
        const interval = setInterval(fetchData, 3000);

        return () => {
            clearInterval(interval);
            chart.remove();
        };
    }, []);

    return (
        <div>
            <h2 className="mb-2 font-semibold text-lg">BTC/USDT Candlestick (Polling API 3s)</h2>
            <div ref={containerRef}></div>
        </div>
    );
}
