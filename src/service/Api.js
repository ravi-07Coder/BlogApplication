import axios from 'axios'


const URL='https://blog-application-server.herokuapp.com'
export const createPost=  async (post) =>{
    console.log(post)
    try{
    return await axios.post(`${URL}/create`,post)
    }
    catch(error)
    {
        console.log('error while creating api',error)
    }
}
//In post Api call we send the data

export const getAllPosts=async(param)=>{
    try{
     let response= await  axios.get(`${URL}/posts${param}`);
          return response.data;
    }
    catch(error){
        console.log("error while calling get all post api",error)
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${URL}/post/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPost API ', error);
    }
}

export const updatePost=async(id,post)=>{
   try{
        await axios.post(`${URL}/update/${id}`,post)
   }
   catch(error)
   {
       console.log
       ("error while connecting updatePost",error)
   }
}


export const deletePost= async (id) =>{
    try{
      await axios.delete(`${URL}/delete/${id}`)
    }
    catch(error)
    {
        console.log("error while connecting deletePost",error)
    }
 }
 export const uploadFile= async (data)=>{
     console.log(data)
     try{
          return  await axios.post(`${URL}/file/upload`,data)
     }
        catch(error)
        {
            console.log("error while uploading the image",error)
        }
    }

    export const newComment= async(data)=>
    {
        try{
               return await axios.post(`${URL}/comment/new`,data)   
             }
        catch(error)
        {
            console.log("error while calling newcomment",error)
        }
    }

    export const getComments=async(id)=>{
        try{
               let response= await axios.get(`${URL}/comments/${id}`)
                return response.data;
            }
        catch(error)
        {
            console.log("error")
        }
    }
    export const deleteComment=async(id)=>{
        try{
             return await axios.delete(`${URL}/comment/delete/${id}`)
            }
        catch(error)
        {
            console.log(" delete comment  error",error)
        }
    }

