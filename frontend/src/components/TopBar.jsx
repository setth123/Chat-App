import { Box, InputBase, Typography, useMediaQuery } from '@mui/material'
import { Chat,Person,Notifications,Search } from '@mui/icons-material'
import { Link } from 'react-router-dom';


const TopBar=()=>{
    const isMobile=useMediaQuery("(max-width: 768px)")
    return(
        //container
        <Box height="50px" width="100%" bgcolor="#1877f2" display="flex" alignItems="center" position="sticky" top="0" zIndex="999">
            {/* left */}
            <Box flex="3">
                <Link to="/" style={{textDecoration:"none",fontSize:"24px",marginLeft:"20px",fontWeight:'bold',color:'white',cursor:'pointer'}}>
                   ChatApp
                </Link>
            </Box>
            {/* center */}
            <Box flex="5">
                    {/* searchBar */}
                    <Box width="100%" height="30px" bgcolor="white" borderRadius="30px" display="flex" alignItems="center">
                        <Search sx={{fontSize:"20px",ml:"10px"}}/>
                        <InputBase placeholder='Search for friends' sx={{border:"none",width:"70%","&:focus":{outline:"none"}}}/>
                    </Box>
            </Box>
            {/* right */}
            <Box sx={{flex:4,display:"flex",alignItems:"center",justifyContent:"center",color:"white"}}>
                {/* navigate */}
                {!isMobile&&(
                    <Box>
                        <Typography sx={{mr:"10px",fontSize:"14px",cursor:"pointer"}}>Homepage</Typography>
                        <Typography sx={{mr:"10px",fontSize:"14px",cursor:"pointer"}}>Timeline</Typography>
                    </Box>
                )}
                {/* icons */}
                <Box display="flex">
                {/* icon */}
                    <Box sx={{cursor:"pointer",mr:"15px",position:"relative"}}>
                        <Person/>
                        <span style={{width:"15px",height:"15px",backgroundColor:"red",borderRadius:"50%",color:"white",position:"absolute",top:"-5px",right:"-5px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px"}}>1</span>
                    </Box>
                    <Box sx={{cursor:"pointer",mr:"15px",position:"relative"}}>
                        <Chat/>
                        <span style={{width:"15px",height:"15px",backgroundColor:"red",borderRadius:"50%",color:"white",position:"absolute",top:"-5px",right:"-5px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px"}}>2</span>
                    </Box>
                    <Box sx={{cursor:"pointer",mr:"15px",position:"relative"}}>
                        <Notifications/>
                        <span style={{width:"15px",height:"15px",backgroundColor:"red",borderRadius:"50%",color:"white",position:"absolute",top:"-5px",right:"-5px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px"}}>1</span>
                    </Box>
                </Box>
                <Link >
                    <img  alt="avatar" style={{width:"30px",height:"32px",borderRadius:"50%",objectFit:"cover",cursor:"pointer"}}/>
                </Link>
            </Box>
        </Box>
    )
}
export default TopBar;