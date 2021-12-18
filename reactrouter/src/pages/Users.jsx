import React, { useEffect, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { UserCard } from '../components/UserCardA';
import { UsersContainer } from '../components/Users/UsersContainer';

export const Users = () => {

  // const users = [{ id: 1, name: 'pepe', lastname: 'perez' }, { id: 2, name: 'john', lastname: 'mid' }]

  return (<>
    <h1>hello users</h1>
    <Outlet/>
  </>
  )
}
/*
    //   <>
    //     <ul>
        {users.map(({ id, name }) => <li key={id}>{name}</li>)}
    //     </ul>

    //     <div>
    // {/* <Outlet/> 
    //       <Routes>

    //       <Route path='1' element={<h2>'children user'</h2>} />
    //       </Routes>
    //     </div>

  */