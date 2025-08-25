import { generateCandle } from "../../../lib/priceService";

export const config = {
    runtime: "edge", // Edge Runtime bắt buộc cho WebSocket trên Vercel
};

export default async function handler(req) {
    if (req.headers.get("upgrade") !== "websocket") {
        return new Response("Expected websocket", { status: 400 });
    }

    const { socket, response } = Deno.upgradeWebSocket(req);
    let lastPrice = 30000;

    socket.onopen = () => {
        console.log("✅ Client connected to WebSocket");

        // Gửi candle mới mỗi 3s
        const interval = setInterval(() => {
            const candle = generateCandle(lastPrice);
            lastPrice = candle.close;
            socket.send(JSON.stringify(candle));
        }, 3000);

        socket.onclose = () => {
            clearInterval(interval);
            console.log("❌ Client disconnected");
        };
    };

    return response;
}
