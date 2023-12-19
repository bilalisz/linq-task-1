import { Axios } from "./axios"

export const getUserData=async (param)=>{

   const res=await Axios.get(param);

   return res.data
}