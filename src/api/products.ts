import axios from "axios";
import {IProductsResponse } from '../interfaces/product';

export const getAllProducts = async () => {
    try {
      const allProducts = await axios.get(
        "https://fakestoreapi.com/products?limit=18"
      );

      const Response:IProductsResponse = {
        data: allProducts.data,
        error: null
      }   
      return Response;
    } catch (error:any) {
      console.log(error.response);
      const Response:IProductsResponse = {
        data: [],
        error: error.message
      }  
      return Response;
    }
  };
  
  export const getSpecificCategory = async (category:string, limit?:number) => {
    try {
      const allProducts = await axios.get(
        `https://fakestoreapi.com/products/category/${category}${
          limit ? "?limit=" + limit : ""
        }`
      );

     const Response:IProductsResponse = {
        data: allProducts.data,
        error: null
      }   
      return Response;
    } catch (error:any) {
      console.log(error.response);
      const Response:IProductsResponse = {
        data: [],
        error: error.message
      }  
      return Response;
    }
  };
  
