import mongoose from "mongoose";

const conversationSchema=new mongoose.Schema({
    members:{
        type:Array,
    },
},{timestamps:true})

const Conversation=mongoose.Model("Conversation",conversationSchema);
export default Conversation;