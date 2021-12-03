
import { Typography,Box,makeStyles } from "@material-ui/core";
import {Delete}  from '@material-ui/icons'
import { deleteComment } from "../../service/Api";


const useStyles=makeStyles({
     component:{
         marginTop:30,
         background:'F5F5F5',
         padding:10     },
         Container:{
             display:'flex',
             marginBottom:5,
         },
         name:{
             fontSize:18,
             fontWeight:600,
             marginRight:20
         },

         
         date:{
             fontSize:14,
             color:'gray'
         },
         Delete:{
             marginLeft:'auto'
         }
})

const Comment= ({comment,settoggle})=>{

    const classes=useStyles();

   const removeComment= async()=>{
       await deleteComment(comment._id)
       settoggle(prev=>!prev)
    }
    return(
        <Box className={classes.component}>
            <Box className={classes.Container}>
           <Typography className={classes.name}>{comment.name}</Typography>
           <Typography   className={classes.date}>{new Date(comment.date).toDateString()}</Typography>  
           <Delete  onClick={()=>removeComment()}   className={classes.Delete}/>
           </Box>  
            <Typography>{comment.comments}</Typography>
        </Box>
    )
}
export default Comment;