import express from "express";
import cors from "cors";
import horoscopeRouter from "./routes/horoscope.js";

export const app = express();
app.use(express.json());
//CORS
app.use(
  cors({
    origin: ["*", "http://localhost:5000", "http://localhost:3000"],
    method: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);
app.use("/horoscope", horoscopeRouter);
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "All Systems Operational" });
});
