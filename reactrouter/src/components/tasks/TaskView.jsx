import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap';
import { BsCheckCircle, BsCheckCircleFill, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { TaskContext } from '../../context/TasksContext';

export const TaskView = ({
  task,
  handleDelete,
  handleEdit,
  handleStatus,
  editMode }) => {
  const { title, id, status, description } = task;
  const ctx = useContext(TaskContext)
  console.log(ctx)
  return (
    <li>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          {!editMode &&
            (<>
              <BsFillTrashFill fontVariant={''} onClick={() => handleDelete(id)} style={{ color: 'red', cursor: 'pointer' }} />
              <BsFillPencilFill
                color='green'
                onClick={() => handleEdit(id)}
                style={{ cursor: 'pointer' }} />
              {status ?
                <BsCheckCircleFill
                  color='green'
                  onClick={() => handleStatus(id)}
                  style={{ cursor: 'pointer' }}
                /> :
                <BsCheckCircle
                  color='red'
                  onClick={() => handleStatus(id)}
                  style={{ cursor: 'pointer' }} />}
            </>
            )
          }
          <Button onClick={() => ctx.changeText(id)}  > Change Text </Button>
        </Card.Body>
      </Card>
    </li>
  )
}
