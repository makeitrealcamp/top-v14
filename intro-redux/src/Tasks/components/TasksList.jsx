import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteTask } from '../../redux/tasks/tasksActions';
import { TaskCard } from './TaskCard';

export const TasksList = () => {
  const { tasks } = useSelector(state => state.tasks)
  const dispatch = useDispatch();
  return (
    <>
      {
        tasks.length > 1 && tasks.map(({ id, title, description }) => (
          <TaskCard
            key={id}
            title={title}
            description={description}
            id={id}
            handleDelete={() => dispatch(deleteTask(id))}
          />))
      }

    </>

  );
};
