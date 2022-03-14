import { useState, useEffect } from 'react';
import { Product } from '../../shared/types/productType';
import { callApi } from '../services/callAPI';
import { API_URL } from '../Utils/ApiUrl';

interface AllProducts {
  products: Product[];
  loading: boolean;
  error: Error | null;
}

export const useGetAllProducts = (): AllProducts => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    callApi(API_URL)
      .then((products) => setProducts(products))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    products,
    loading,
    error,
  };
};
