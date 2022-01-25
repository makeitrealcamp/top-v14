import React, { useEffect, useState } from 'react'
import { useGetMovies } from '../customHooks/useGetMovies';
import { useLocalStorage } from '../customHooks/useLocalStorage';
import { movies as enpoint } from '../utils/constants'
import { MovieCard } from './components/MovieCard';

export const MoviesLatest = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const URL = enpoint.popular;

  const { loading, error, movies } = useGetMovies(URL, apiKey);
  const [favoritesHook, saveFavoritesHook] = useLocalStorage('fav-hook');


  const handleFavoritesHook = (movie) => {

    if (favoritesHook) {
      const newFav = favoritesHook.filter(({ id }) => id === movie.id);
      if (!newFav.length > 0) {
        saveFavoritesHook([movie, ...favoritesHook])
      }

    } else {
      saveFavoritesHook([movie])
    }


  }
  const handleFavorites = (movie) => {

    let favorites = localStorage.getItem('fav');

    if (!favorites) {
      localStorage.setItem('fav', JSON.stringify([movie]));
    } else {
      favorites = JSON.parse(favorites);

      const newFav = favorites.filter(({ id }) => id === movie.id);

      if (!newFav.length > 0) {
        favorites = [movie, ...favorites]
        localStorage.setItem('fav', JSON.stringify(favorites));
      }
    }

  }

  if (loading) return <h1>Is loading</h1>
  if (error) return <h1>Upss error</h1>

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.original_title}
          overview={movie.overview}
          image={movie.poster_path}
          id={movie.id}
          handleFavorites={handleFavoritesHook}
        />
      ))}
    </div>
  )
}
