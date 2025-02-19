import app from "../index.js";

export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "https://managix.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    return app(req, res);
}
