"use client";

import { useEffect, useRef } from "react";
import { createChart, BaselineSeries } from "lightweight-charts";

export default function FakeBaselineChart() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const chart = createChart(containerRef.current, { width: 600, height: 300 });
        const series = chart.addSeries(BaselineSeries, {
            baseValue: { type: 'price', price: 90 },
        });

        const data = Array.from({ length: 20 }, (_, i) => ({
            time: `2023-08-${(i + 1).toString().padStart(2, "0")}`,
            value: 80 + Math.random() * 20,
            topValue: 100 + Math.random() * 10,
            bottomValue: 70 - Math.random() * 10,
        }));

        series.setData(data);
        return () => chart.remove();
    }, []);

    return (
        <div>
            <h2 className="mb-2 font-semibold text-lg">Fake Baseline Chart</h2>
            <div ref={containerRef}></div>
        </div>
    )
}
