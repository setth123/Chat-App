import Message from '../models/Message.js'

export const sendMessage = async(req,res)=>{
    try{
        const message=new Message(req.body);
        await message.save();
        res.status(200).json(message);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

export const getMessage=async(req,res)=>{
    try{
        const {conversationId}=req.params;
        const messages=await Message.find(conversationId);
        res.status(200).json(messages);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}