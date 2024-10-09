import mongoose from "mongoose";

const MessageSchema=new mongoose.Schema({
    conversationId:{
        type:String,
        require:true
    },
    sender:{
        type:String,
        require:true,
    },
    text:{
        type:String,
        require:true,
    }
},{timestamps:true})

const Message=mongoose.Model("Message",MessageSchema);
export default Message;