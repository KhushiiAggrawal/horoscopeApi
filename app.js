import express from "express";
import horoscopeRouter from "./routes/horoscope.js";

export const app = express();
app.use(express.json());
app.get("/horoscope",horoscopeRouter)
app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "All Systems Operational" });
  });
  

