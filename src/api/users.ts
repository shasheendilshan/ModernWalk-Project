import axios from "axios";
import {v4 as uuid} from "uuid";

import { IUser } from "../interfaces/user";

export const createUser=async(user:IUser)=>{
     const body:IUser={
         id:uuid(),
         ...user
     }   
    try {
         const Response = await axios.post(" http://localhost:5000/users",body);
         return Response;
    } catch (error:any) {
        console.log("error while user create",error.message)
    }
}

export const getUser =async(user:IUser)=>{
  
   try {
        const Response = await axios.get(`http://localhost:5000/users?email=${user.email}&password=${user.password}`);
        return Response;
   } catch (error:any) {
       console.log("error while user create",error.message)
   }
}