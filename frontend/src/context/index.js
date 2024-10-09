import {createSlice} from "@reduxjs/toolkit"

const initialState={
    user:null,
    token:null
};
export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.user=action.payload.user;
            state.token=action.payload.token;
        },
        setLogout:(state,action)=>{
            state.user=null;
            state.token=null;
        },
        setFriends:(state,action)=>{
            if(state.user){
                state.user.following=action.payload.following;
            }
            else{
                console.log("User following is not exist");
            }
        }
    }
})
export const {setLogin,setLogout,setFriends}=authSlice.actions;
export default authSlice.reducer;