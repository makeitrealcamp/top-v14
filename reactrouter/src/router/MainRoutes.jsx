import React, { useContext } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { PostDetails } from '../components/PostDetails'
import { PostList } from '../components/PostList'
import { Private } from '../components/Private'
import { PrivateB } from '../components/PrivateB'
import { UserDetails } from '../components/UserDetailsA'
import { UsersContainer } from '../components/Users/UsersContainer'
import { AuthContext } from '../context/authContext'
import { About } from '../pages/About'
import { Home } from '../pages/Home'
import { LoginPage } from '../pages/LoginPage'
import { NotFound } from '../pages/NotFound'
import { Posts } from '../pages/Posts'
import { Tasks } from '../pages/Tasks'
import { TasksDone } from '../pages/TasksDone'
import { Users } from '../pages/Users'
import { PrivateRouteA } from './PrivateRouteA'
import { PrivateRouteB } from './PrivateRouteB'

export const MainRoutes = () => {
  const { auth } = useContext(AuthContext)

  return (
    <Router>
      <Navigation isLoggedIn={auth} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='users' element={<Users />} >
          <Route path='' element={<UsersContainer />} />
          <Route path=':id' element={<UserDetails />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='posts' element={<Posts />} >
          <Route path='' element={<PostList />} />
          <Route path=':id' element={<PostDetails />} />
        </Route>
        <Route path='tasks' element={<Tasks />} />
        <Route path='done' element={<TasksDone />} />
        <Route path='login' element={<LoginPage />} />
        {/* <Route path='private'
          element={
            <PrivateRouteA user={true} >
              <Private />
            </PrivateRouteA>} /> */}
        {/* <Route path='privateB'
          element={
            <PrivateRouteA user={false} >
              <PrivateB />
            </PrivateRouteA>} /> */}

        <Route element={<PrivateRouteB user={auth} />}>
          <Route path='privateB' element={<PrivateB />} />
          <Route path='private' element={<Private />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
