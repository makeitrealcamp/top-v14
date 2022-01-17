import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserCard } from './UserCard';

export const UsersContainer = () => {
  const navigate = useNavigate()

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)

  const handleDetails = (id, user) => {
    navigate(`${id}`, { state: user })
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setUsers(data.results)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  if (loading) {
    <Spinner className='mt-4' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  }

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
