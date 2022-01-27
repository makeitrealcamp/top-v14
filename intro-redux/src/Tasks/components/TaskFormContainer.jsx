import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../redux/tasks/tasksActions';
import { TaskFormView } from './TaskFormView';

export const TaskFormContainer = () => {
  const [title, setTitle] = useState(' ');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const saveTask = (e) => {
    e.preventDefault()
    const task = {
      id: Date.now(),
      title,
      description
    }
    dispatch(createTask(task));
    setTitle('');
    setDescription('');
  }

  return (
    <TaskFormView
      handleTitle={(e) => setTitle(e.target.value)}
      handleDescription={(e) => setDescription(e.target.value)}
      handleSubmit={saveTask}
      title={title}
      description={description}
    />
  );
};
