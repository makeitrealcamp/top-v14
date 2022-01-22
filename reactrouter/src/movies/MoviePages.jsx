import React from 'react'
import { MovieList } from './MovieList'
import { MoviesLatest } from './MoviesLatest'

export const MoviePages = () => {
  return (
    <div>
      <MovieList/>
      <MoviesLatest/>
    </div>
  )
}
