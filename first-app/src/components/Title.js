import React from 'react'


export const Title = ({ name, age, genre }) => {
  return (
    <h1>
      Hello {name} you're {age} years old
      and you are a  {genre === 'male' ? ' man' : ' woman'}
    </h1>
  )
}

Title.defaultProps = {
  name: 'no name',
  age: 0,
  genre: 'male'
}