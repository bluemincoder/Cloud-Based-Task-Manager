import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddleware.js";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js";

dotenv.config();

dbConnection();

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
            "https://managix-git-main-bluemins-projects-7700be1e.vercel.app,
        ],
        methods: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the API!" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);

// ✅ Export the app as a Vercel-compatible serverless function
export default app;
