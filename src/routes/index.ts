import express from "express"
import { analyzingRouter } from "./analyze.js";

export const router = express.Router()

router.use("/analyze", analyzingRouter);