import axios from "axios";

export const productsAPI = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 5000,
});


