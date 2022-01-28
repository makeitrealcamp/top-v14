import React from 'react'
import { Card } from 'react-bootstrap';
import { BsCheckCircle, BsCheckCircleFill, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'


export const TaskView = ({
  task,
  handleDelete,
  handleEdit,
  handleStatus,
  editMode }) => {
  const { title, id, status, description } = task;

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
                onClick={() => handleStatus(id)}
                  color='red'
                  style={{ cursor: 'pointer' }} />}
            </>
            )
          }

        </Card.Body>
      </Card>
    </li>
  )
}
