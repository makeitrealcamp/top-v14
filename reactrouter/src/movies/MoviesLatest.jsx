import React, { useEffect, useState } from 'react'
import { useGetMovies } from '../customHooks/useGetMovies';
import { movies as enpoint } from '../utils/constants'

export const MoviesLatest = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const URL = enpoint.popular;

  const { loading, error, movies } = useGetMovies(URL, apiKey)

  if (loading) return <h1>Is loading</h1>
  if (error) return <h1>Upss error</h1>

  return (
    <div>
      MOVIE Latest
    </div>
  )
}
