import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { productsAPI } from '../../axios/apiUrl';
import { addToCart } from '../../redux/cart/cartActions';
import { initProducts } from '../../redux/products/productsReducer';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(initProducts())
  }, [dispatch]);


const handleAddToCart=(id)=>{
  dispatch(addToCart(id))
}

  /*const getData = async () => {
    try {
      setIsLoading(true)
      const { data } = await productsAPI.get('/products')
      setProducts(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
    // dispatch -> request http
  } */


  useEffect(() => {
    // productsAPI.get('/products')
    //   .then(({ data }) => setProducts(data))
    // getData();
  }, []);

  if (isLoading) return <h2>is loading</h2>

  return (
    <>
      {
        products && products.length > 0 && products.map(({ id, title, description, image, price }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            price={price}
            handleAddToCart={handleAddToCart}
          />
        ))
      }

    </>
  )

    ;
};
