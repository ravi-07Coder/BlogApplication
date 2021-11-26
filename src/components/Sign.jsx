// import React from "react";
// import {Grid,Paper,Avatar,Typography, TextField,Button} from '@material-ui/core'
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import { saveUser } from "../service/Api";
// import { useState } from "react";

// const Sign=()=>{

     
//      const[data,setData]=useState({
//          name:'',
//          email:'',
//          phone:'',
//          password:'',
//          confirmpassword:'',

//      })
//      const handleChange = (e) => {
//         setData({ ...data, name: e.target.value })
//     }
//     const handleChange1 = (e) => {
//         setData({ ...data, email: e.target.value })
//     }
//     const handleChange2 = (e) => {
//         setData({ ...data, phone: e.target.value })
//     }
//     const handleChange3 = (e) => {
//         setData({ ...data, password: e.target.value })
//     }
//     const handleChange4 = (e) => {
//         setData({ ...data, confirmpassword: e.target.value })
//     }
   
    
//     const save = async () => {
//          e.preventDefault();
//         await saveUser(data)
//     }


//     const paperStyle={padding:'30px 20px ',width:300,margin:'20px auto'}
//     return(
//         <Grid>
//           <Paper elevation={20} style={paperStyle}>
//               <Grid align='center'>
//                   <Avatar style={{backgroundColor:'green'}}>
//                     <AddCircleOutlineOutlinedIcon/>
//                    </Avatar>
//                    <h2 style={{margin:0}}>Sign up</h2>
//                    <Typography variant='caption' gutterBottom>Please fill this form to create an acoount!</Typography>
//               </Grid>
//               <form onSubmit={save}>
//                 <TextField fullWidth label="Name"  name='name' value={data.name}  onChange={(e)=>handleChange(e)} placeholder="enter your name" />     
//                 <TextField fullWidth label="Email"  name='email' value={data.email} onChange={(e)=>handleChange1(e)}  placeholder="enter your email" />   
//                 <TextField fullWidth label="Phone Number" name='phone' value={data.phone} onChange={(e)=>handleChange2(e)}  placeholder="enter your phone number" />
//                 <TextField fullWidth label="Password"  name='password' value={data.password} onChange={(e)=>handleChange3(e)}  placeholder="enter your password" />
//                 <TextField fullWidth label="Confirm Password" value={data.confirmpassword}  onChange={(e)=>handleChange4(e)}   name='confirmpassword' placeholder="confirm password" />
//                 <Button type ='submit' variant='contained' color='primary' style={{
//                     marginTop:'20px' , marginLeft:100
//                 }}>Sign up</Button>


//              </form>
//            </Paper>
//      </Grid>
//     )
// }
// export default Sign;
