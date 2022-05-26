
import { get } from './api.services';
import { config } from './config.services';
import { IResponse } from '../interfaces/global/global.interface';
import { errorToast } from '../components/Toast/Toast';



export const getAllProducts = async () => {
    try {
      const allProducts = await get(
        `${config.productsBaseUrl}/products?limit=18`
      );

      const response:IResponse= {
        data: allProducts.data,
        error: null,
        status:allProducts.status
      }   
      return response;
    } catch (error:any) {
      errorToast(error.message)
      const response:IResponse = {
        data: [],
        error: error
      }  
      return response;
    }
  };


  export const getSpecificCategory = async (category:string, limit?:number) => {
    try {
      const allProducts = await get(
        `${config.productsBaseUrl}/products/category/${category}${
          limit ? "?limit=" + limit : ""
        }`
      );

     const response:IResponse = {
        data: allProducts.data,
        error: null
      }   
      return response;
    } catch (error:any) {
      errorToast(error.message)
      const response:IResponse = {
        data: [],
        error: error
      }  
      return response;
    }
  };
  
