import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { getConversations, newConversation,getConversation } from "../controllers/conversation";

const chatRouter=express.Router();
chatMessage.post('/chat/new',verifyToken,newConversation)
chatMessage.post('/chat/:userId',verifyToken,getConversations);
chatMessage.post('/chat/:userId/:friendId',verifyToken,getConversation);
export default chatRouter;