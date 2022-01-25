import React from 'react'
import { MovieList } from './MovieList'
import { MoviesLatest } from './MoviesLatest'
import { MoviesPopular } from './MoviesPopular'
import { MoviesUpComing } from './MoviesUpComing'

export const MoviePages = () => {
  return (
    <div>
      <MoviesPopular/>
      <MoviesLatest/>
      <MoviesUpComing/>
    </div>
  )
}
