import React from 'react'
import { useContext } from 'react'
import { Card } from 'react-bootstrap';
import { TaskContext } from '../context/TasksContext'

export const TasksDone = () => {
  const { tasks } = useContext(TaskContext);
  const doneTasks = tasks.filter(task => task.status === true)
  return (<>
    {
      doneTasks.length > 0 && (
        doneTasks.map(({ id, title, description }) =>
        (<li key={id}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
        ))
      )
    }
  </>
  )
}
