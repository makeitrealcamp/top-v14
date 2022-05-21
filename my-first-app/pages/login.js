import React from 'react'

const login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.title.value)
    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: e.target.title.value }),
      });
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form method='post' onSubmit={handleSubmit}>
      <input type='text' name='title' />
      {/* <input type='password' name='password' /> */}
      <button type='submit' value='Submit' > login</button>
    </form>
  )
}

export default login