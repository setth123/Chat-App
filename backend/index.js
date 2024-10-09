import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import multer from 'multer';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import chatRouter from './routes/chatRoutes.js';

dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//file storage
const __fileName=fileURLToPath(import.meta.url);
const __dirName=path.dirname(__fileName);
app.use("images",express.static(path.join(__dirName,"public/images")));
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
})
const upload=multer({storage:storage});
//file router
app.post("/api/upload",upload.single("file"),(req,res)=>{
    try{
        return res.status(200).send("File upload successful");
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err.message);
    }
})

//routers
app.use("/auth",authRouter);
app.use("/user",userRouter);
app.use("/message",messageRouter);
app.use("/chat",chatRouter);

const PORT=process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>{console.log(`App listening on ${PORT} and connect to database`);});
}).catch((err)=>{console.log(err.message);})

