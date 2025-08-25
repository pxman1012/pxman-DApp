// lib/priceService.js
export function generateCandle(prevClose = 30000) {
    const open = prevClose;
    const high = open + Math.random() * 200;
    const low = open - Math.random() * 200;
    const close = low + Math.random() * (high - low);

    return {
        time: Date.now() / 1000, // UNIX timestamp (giây)
        open: Math.round(open),
        high: Math.round(high),
        low: Math.round(low),
        close: Math.round(close),
    };
}
