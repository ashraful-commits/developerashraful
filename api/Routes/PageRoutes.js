import express from "express"
import { ReceiveMessage, gettAllMessage } from "../Controllers/PageController.js"


const router = express.Router()
router.route("/").get(gettAllMessage).post(ReceiveMessage)
export default router