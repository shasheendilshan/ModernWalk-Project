
import { IUser } from '../interfaces/users/users.interfaces';


export const setUserInLocalStorage =(user:IUser)=>{
   localStorage.setItem('userDetails',JSON.stringify(user));
}

export const getUserFromLocalStorage =()=>{
   const user:string|null= localStorage.getItem('userDetails');
  
   if(user){
        const userDetails:IUser = JSON.parse(user);
    return userDetails;
   }else{
       return null;
   }
   
 }
 export const removeUserFromLocalStorage =()=>{
    localStorage.removeItem('userDetails');
 }


 export const setRememberMe =(user:IUser)=>{
   localStorage.setItem('loginDetails',JSON.stringify(user));
}

export const getRememberMeDetails =()=>{
   const user:string|null= localStorage.getItem('loginDetails');
  
   if(user){
        const userDetails:IUser = JSON.parse(user);
    return userDetails;
   }else{
       return null;
   }
   
 }
 export const removeRememberMeDetails =()=>{
   localStorage.removeItem('loginDetails');
}

