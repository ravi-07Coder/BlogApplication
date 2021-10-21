import axios from 'axios'



const URL='https://localhost:8000'
export const createPost=  async (post) =>{
    try{
    return   await  axios.post(`${URL}/create`,post)
    }
    catch(error)
    {
        console.log('error while creating api',error)
    }

}
//In post Api call we send the data