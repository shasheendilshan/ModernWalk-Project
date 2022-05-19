import axios from "axios";
import { IProduct } from './../interfaces/index';

type Response = {
  data:IProduct[],
  error:string| null
}


export const getAllProducts = async () => {
    try {
      const allProducts = await axios.get(
        "https://fakestoreapi.com/products?limit=18"
      );

      const Response:Response = {
        data: allProducts.data,
        error: null
      }   
      return Response;
    } catch (error:any) {
      console.log(error.response);
      const Response:Response = {
        data: [],
        error: null
      }  
      return Response;
    }
  };

  // export const getAllProducts = async () => {
  //   try {
  //     const allProducts = await axios.get(
  //       "https://fakestoreapi.com/products?limit=18"
  //     );
 
  //     return { data: allProducts.data, error: null};
  //   } catch (error:any) {
  //     console.log(error.response);
  //     return { data: [], error: error.response };
  //   }
  // };
  
  
  export const getSpecificCategory = async (category:string, limit?:number) => {
    try {
      const allProducts = await axios.get(
        `https://fakestoreapi.com/products/category/${category}${
          limit ? "?limit=" + limit : ""
        }`
      );
      return { data: allProducts.data, error: 0 };
    } catch (error:any) {
      console.log(error.response);
      return { data: [], error: error.response };
    }
  };
  
