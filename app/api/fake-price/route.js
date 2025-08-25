import { generateCandle } from "../../../lib/priceService";

let lastClose = 30000;

export async function GET() {
    const candle = generateCandle(lastClose);
    lastClose = candle.close;
    return Response.json(candle);
}
