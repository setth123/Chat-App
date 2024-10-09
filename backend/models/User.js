import mongoose from "mongoose";
const UserSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            require:true,
            min:3,
            max:20,
        },
        email:{
            type:String,
            require:true,
            max:50,
        },
        password:{
            type:String,
            require:true,
            min:6,
        },
        avatar:{
            type:String,
            default:"",
        },
        desc:{
            type:String,
            max:50,
            default:""
        },
        followers:{
            type:Array,
            default:[],
        },
        following:{
            type:Array,
            default:[],
        }
    },
    {timestamps:true}
)
const User=mongoose.model('User',UserSchema);
export default User;