import User from "../models/User.js";

//update user
export const updateUser=async(req,res)=>{
    try{
        const {userId}=req.params;
        const user=await User.findByIdAndUpdate(userId,{
            $set:req.body
        });
        return res.status(200).json(user);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err.message);
    }
}

export const getUser=async(req,res)=>{
    try{
        const {userId}=req.params;
        const user=await User.findById(userId);
        res.status(200).json(user);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}
export const getFriend=async(req,res)=>{
    try{
        const {userId}=req.params;
        const user=await User.findById(userId);
        const friends=await Promise.all(
            user.following.map((friendId)=>{
                return User.findById(friendId);
            })
        )
        let friendList=[]
        friends.map((friend)=>{
            const {_id,username,avatar}=friend;
            friendList.push(friend);
        })
        res.status(200).json(friendList);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

export const followUser=async(req,res)=>{
    try{
        const {userId,friendId}=req.params;
        const user=await User.findById(userId);
        const friend=await User.findById(friendId);

        if(user.following.includes(friendId)){
            await user.updateOne({$pull:{following:friendId}});
            await friend.updateOne({$pull:{followers:userId}});
        }
        else{
            await user.updateOne({$push:{following:friendId}});
            await friend.updateOne({$push:{followers:userId}});
        }
        const updateUser=User.findById(userId);
        res.status(200).json(updateUser);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}