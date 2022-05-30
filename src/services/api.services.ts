import  axios  from 'axios';
import { config } from './config.services';
import { errorToast } from '../components/Toast/Toast.component';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = config.baseUrl;



const get =(url:string)=>axiosClient.get(url).then((res:any)=>{return res}).catch((error)=>{errorToast(error.message)})
const post =(url:string,body:object)=>axiosClient.post(url,body).then((res:any)=>{return res}).catch((error)=>{errorToast(error.message)})

export {get,post}
