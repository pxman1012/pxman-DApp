import FakeLineChart from "../../components/chart/FakeLineChart";
import PollingCandlestickChart from "../../components/chart/PollingCandlestickChart";
// import RealtimeCandlestickChart from "../../components/chart/RealtimeCandlestickChart";

export default function TradingView() {
    return (
        <main className="flex flex-col items-center p-10">
            <h1 className="text-2xl font-bold mb-6">Polling Candlestick Demo (fake api 3s update)</h1>
            <PollingCandlestickChart />
            
            {/* <h1 className="text-2xl font-bold mb-6">Realtime Candlestick Demo (WS)</h1>
            <RealtimeCandlestickChart /> */}
        </main>
    );
}
