import { useEffect, useState } from 'react'

export const useGetMovies = (URL, apiKey) => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    fetch(`${URL}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.results) {
          setMovies(data.results)
          setLoading(false)
        }
      })
      .catch(err => setError(err))

  }, [])
  return { movies, loading, error }
}
