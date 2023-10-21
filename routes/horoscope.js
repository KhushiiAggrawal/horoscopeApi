import express from "express";
import { getHoroscope,createHoroscope } from "../controllers/horoscope.js";

const router = express.Router();
router.get("/",getHoroscope).post("/",createHoroscope)

export default router;
