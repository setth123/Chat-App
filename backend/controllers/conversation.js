import Conversation from '../models/Conversation.js';


export const newConversation=async(req,res)=>{
    try{
        const {senderId,receiveId}=req.body;
        const conversation=new Conversation({
            members:[senderId,receiveId],
        })
        await conversation.save();
        res.status(200).json(conversation);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

export const getConversations=async(req,res)=>{
    try{
        const conversations=await Conversation.find({
            members:{$in:[req.params.userId]},
        })
        res.status(200).json(conversations);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

export const getConversation=async(req,res)=>{
    try{
        const conversation=await Conversation.findOne({
            members:{$all:[req.params.userId,req.params.friendId]},
        });
        res.status(200).json(conversation);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}