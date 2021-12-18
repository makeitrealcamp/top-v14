import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../utils/db'

export const PostList = () => {
  const [posts] = useState(db)
  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id} >
            <h2>{post.title}</h2>
            {/* <p>{post.content}</p> */}
            <Link to={`/posts/${post.id}`}>Details</Link>
          </div>
        )

      })}
    </div>
  )
}
