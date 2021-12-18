import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import db from '../utils/db'

export const PostDetails = () => {
  const { id } = useParams();

  const [post, setPost] = useState({})


  useEffect(() => {
    //  fetch('url/ID')//URL

  setPost(db.filter(post => post.id === +id)[0])
  }, [])

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  )
}
