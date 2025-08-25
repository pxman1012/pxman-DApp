import FakeAreaChart from "../../components/chart/FakeAreaChart";
import FakeBarChart from "../../components/chart/FakeBarChart";
import FakeBaselineChart from "../../components/chart/FakeBaselineChart";
import FakeCandlestickChart from "../../components/chart/FakeCandlestickChart";
import FakeHistogramChart from "../../components/chart/FakeHistogramChart";
import FakeLineChart from "../../components/chart/FakeLineChart";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10 space-y-6">
      <h1 className="text-2xl font-bold mb-6">All Lightweight Charts Demo</h1>
      <FakeLineChart />
      <FakeAreaChart />
      <FakeBarChart />
      <FakeBaselineChart />
      <FakeCandlestickChart />
      <FakeHistogramChart />
    </main>
  );
}
