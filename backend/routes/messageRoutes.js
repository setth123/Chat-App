import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { getMessage, sendMessage } from "../controllers/message.js";
const messageRouter=express.Router();
messageRouter.post("/send",verifyToken,sendMessage);
messageRouter.get("/:conversationId",verifyToken,getMessage);
export default messageRouter;