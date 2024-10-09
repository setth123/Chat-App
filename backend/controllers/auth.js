import bcrypt from 'bcrypt';
import User from '../models/User.js';

import jwt from 'jsonwebtoken';
export const register=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const user=await User.findOne({email});
        if(user)return res.status(409).send("Email already existed");
        const newUser=new User({
            username:username,
            email:email,
            password:hashedPassword
            });
            await newUser.save();
        return res.status(200).send("Register successfully");

    }
    catch(err){
        console.log(err);
        return res.status(500).json(err.message);
    }
}

export const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user) return res.status(404).send("Wrong email or password");
        const isValid=bcrypt.compare(password,user.password);
        if(!isValid)return res.status(404).send("Wrong email or password");

        const secretKey=process.env.SECRET_KEY;
        const token=jwt.sign({id:user._id},secretKey);
        return res.status(200).json({token,user});
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}