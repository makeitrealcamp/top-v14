import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserCard } from './UserCard';

export const UsersContainer = () => {
  const navigate = useNavigate()

  const [users, setUsers] = useState([]);

  const handleDetails = (id, user) => {
    navigate(`${id}`, { state: user })
    // console.log(id)
  }

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
    {
      users.map((user) => (
        <UserCard
          key={user.login.uuid}
          user={user}
          handleDetails={handleDetails}
        />
      ))
    }
  </>
  )
}
