import express from "express";
import { followUser, getFriend, getUser, updateUser } from "../controllers/user.js";
import verifyToken from "../middlewares/verifyToken.js";

const userRouter=express.Router();
userRouter.patch('/:userId/update',verifyToken,updateUser);
userRouter.get('/:userId',getUser);
userRouter.get('/:userId/friends',verifyToken,getFriend);
userRouter.patch('/:userId/:friendId/follow',verifyToken,followUser);
export default userRouter;