"use client";

import { useEffect, useRef } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";

export default function FakeCandlestickChart() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const chart = createChart(containerRef.current, { width: 600, height: 300 });
        const series = chart.addSeries(CandlestickSeries);

        const data = Array.from({ length: 20 }, (_, i) => {
            const open = 80 + Math.random() * 20;
            const close = 80 + Math.random() * 20;
            const high = Math.max(open, close) + Math.random() * 10;
            const low = Math.min(open, close) - Math.random() * 10;
            return {
                time: `2023-08-${(i + 1).toString().padStart(2, "0")}`,
                open, high, low, close,
            };
        });

        series.setData(data);
        return () => chart.remove();
    }, []);

    return (
        <div>
            <h2 className="mb-2 font-semibold text-lg">Fake Candlestick Chart</h2>
            <div ref={containerRef}></div>
        </div>
    )
}
