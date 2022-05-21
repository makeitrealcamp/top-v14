import React from 'react'

const tasks = ({ tasks }) => {
  console.log(tasks)
  return (<>
    <div>tasks</div>
    {tasks.length > 0 && tasks.map(task => (
      <h2 key={task._id}>{task.title}</h2>
    ))}
  </>
  )
}

export async function getStaticProps() {
  try {
    const data = await fetch('http://localhost:3000/api/tasks');
    const tasks = await data.json();

    return {
      props: { tasks: tasks.data }, // will be passed to the page component as props
    }
  } catch (error) {
    console.log(error)
    return {
      props: { error: 'Ups' }, // will be passed to the page component as props
    }
  }
}

export default tasks;