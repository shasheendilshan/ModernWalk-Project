
import { get } from '.';
import {IProductsResponse } from '../interfaces/product';

const baseUrl = "https://fakestoreapi.com";

export const getAllProducts = async () => {
    try {
      const allProducts = await get(
        `${baseUrl}/products?limit=18`
      );

      const response:IProductsResponse = {
        data: allProducts.data,
        error: null
      }   
      return response;
    } catch (error:any) {
      console.log(error.response);
      const response:IProductsResponse = {
        data: [],
        error: error.message
      }  
      return response;
    }
  };


  export const getSpecificCategory = async (category:string, limit?:number) => {
    try {
      const allProducts = await get(
        `${baseUrl}/products/category/${category}${
          limit ? "?limit=" + limit : ""
        }`
      );

     const response:IProductsResponse = {
        data: allProducts.data,
        error: null
      }   
      return response;
    } catch (error:any) {
      console.log(error.response);
      const response:IProductsResponse = {
        data: [],
        error: error.message
      }  
      return response;
    }
  };
  
