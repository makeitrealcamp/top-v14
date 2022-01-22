import React, { useEffect } from 'react'
import { useState } from 'react';
import { useGetMovies } from '../customHooks/useGetMovies';
import { movies as enpoint } from '../utils/constants'

export const MovieList = () => {
  // NO SE LES OLVIDE SACAR SU API KEY!!!!!
  const apiKey = process.env.REACT_APP_API_KEY
  const URL = enpoint.popular;
  const { loading, error, movies } = useGetMovies(URL, apiKey)
  // const [movies, setMovies] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)


  // useEffect(() => {

  //   fetch(`${URL}?api_key=${apiKey}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.results) {
  //         setMovies(data.results)
  //         setLoading(false)
  //       }
  //     })
  //     .catch(err => setError(err))

  // }, [])

  if (loading) return <h1>Is loading</h1>
  if (error) return <h1>Upss error</h1>

  return (
    <div>
      MOVIE LIST
    </div>
  )
}
