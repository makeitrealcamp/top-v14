import React from 'react';
import { useGetMovies } from '../customHooks/useGetMovies';
import { movies as enpoint } from '../utils/constants'

export const MoviesUpComing = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const URL = enpoint.upcoming;

  const { loading, error, movies } = useGetMovies(URL, apiKey)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>error</h1>
  return <div>Upcoming </div>;
};
