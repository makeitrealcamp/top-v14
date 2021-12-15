import React, { useEffect, useState } from 'react'

export const MyFnText = () => {

  const [users, setUsers] = useState([])
  const data = ['pepe', 'john', 'mike', 'lucy', 'tony']

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))


  // useEffect(() => {


  // }, [])


  return (
    <div>
      {users.map(element => <p key={element.id}> {element.name}</p>)}
    </div>
  )
}
