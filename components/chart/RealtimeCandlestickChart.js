"use client";

import { useEffect, useRef } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";

export default function RealtimeCandlestickChart() {
    const containerRef = useRef(null);
    const seriesRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const chart = createChart(containerRef.current, {
            width: 600,
            height: 300,
            layout: { background: { color: "#fff" }, textColor: "#333" },
            grid: { vertLines: { color: "#eee" }, horzLines: { color: "#eee" } },
        });

        seriesRef.current = chart.addSeries(CandlestickSeries);

        const ws = new WebSocket("ws://localhost:3000/api/ws");

        ws.onmessage = (event) => {
            const candle = JSON.parse(event.data);
            seriesRef.current.update(candle);
        };

        return () => {
            ws.close();
            chart.remove();
        };
    }, []);

    return (
        <div>
            <h2 className="mb-2 font-semibold text-lg">BTC/USDT Realtime (WebSocket Edge)</h2>
            <div ref={containerRef}></div>
        </div>
    );
}
