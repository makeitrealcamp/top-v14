import { productsAPI } from "../../axios/apiUrl";

export const getAllProducts = async () => {
  const { data } = await productsAPI.get('/products');
  return data
}