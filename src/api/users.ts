import {post,get} from '.';
import {v4 as uuid} from "uuid";

import { IUser } from "../interfaces/user";

const baseUrl = "http://localhost:5000";

export const createUser=async(user:IUser)=>{
     const body:IUser={
         id:uuid(),
         ...user
     }   
    try {
         const response = await post(`${baseUrl}/users`,body);
         return response;
    } catch (error:any) {
        console.log("error while user create",error.message)
        
    }
}

export const getUser =async(user:IUser)=>{
  
   try {
        const response = await get(`${baseUrl}/users?email=${user.email}&password=${user.password}`);
        return response;
   } catch (error:any) {
       console.log("error while user create",error.message)
   }
}