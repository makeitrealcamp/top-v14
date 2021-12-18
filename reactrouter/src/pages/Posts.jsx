import React from 'react'
import { Outlet } from 'react-router-dom'
import { PostList } from '../components/PostList'

export const Posts = () => {
  return (
    <div>
      <h2>My Posts</h2>
      <Outlet/>
    </div>
  )
}
