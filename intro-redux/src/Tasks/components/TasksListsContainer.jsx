import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../../redux/tasks/tasksActions';
import { EditTaskModalForm } from './EditTaskModalForm';
import { TasksListView } from './TasksListView';

export const TasksListsContainer = () => {
  const { tasks } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const [taskToEdit, setTaskToEdit] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id))
  }

  const handleEditTask = (id) => {
    const [task] = tasks.filter(task => task.id === id);
    setTaskToEdit(task)
    setTitle(task.title);
    setDescription(task.description);
    setShowModal(true);
  }

  const saveEditTask = () => {
    const newTask = {
      ...taskToEdit,
      title,
      description
    }
    dispatch(editTask(newTask))
    setShowModal(false)
  }
  return (
    <>
      <TasksListView
        tasks={tasks}
        deleteTask={handleDeleteTask}
        editTask={handleEditTask}
      />
      <EditTaskModalForm
        show={showModal}
        cancel={() => setShowModal(false)}
        handleDescription={(e) => setDescription(e.target.value)}
        handleTitle={(e) => setTitle(e.target.value)}
        title={title}
        description={description}
        save={saveEditTask}
      />
    </>
  );
};
