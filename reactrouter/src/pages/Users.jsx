import React, { useEffect, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { UserCard } from '../components/UserCard';

export const Users = () => {

  // const users = [{ id: 1, name: 'pepe', lastname: 'perez' }, { id: 2, name: 'john', lastname: 'mid' }]

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setUsers(data.results)
      })
      .catch(err => console.log(err))
  }, [])


  return (<>
    <h1>hello users</h1>
    {users.map((user) => (
      <UserCard
        key={user.login.uuid}
        // name={user.name.first}
        // city={user.location.city}
        // country={user.location.country}
        // image={user.picture.medium} 
        user={user}
      />
    ))}
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