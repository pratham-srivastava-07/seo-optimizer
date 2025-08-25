import express from "express"
import crawlerController from "../controllers/crawler.js"
import robotController from "../controllers/robot.js"
import serverSideController from "../controllers/server.js"

export const analyzingRouter = express.Router()

analyzingRouter.post("/ssr", serverSideController)
analyzingRouter.post("/crawlers", crawlerController)
analyzingRouter.post("/robot", robotController)

