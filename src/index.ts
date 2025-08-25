import express from "express"
import cors from "cors"
import { router } from "./routes/index.js";
import { PORT } from "./constants.js";
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json())

app.use("/api/v1", router);

app.get("/", async (req: any, res: any) => {
    res.send("Hello")
})
console.log("jubbyudh",PORT)
app.listen(PORT, () => {
    console.log("Server running on port")
})