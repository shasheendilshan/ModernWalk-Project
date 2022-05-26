import  axios  from 'axios';

const get =(url:string)=>axios.get(url)
const post =(url:string,body:object)=>axios.post(url,body);

export {get,post}
