import React, { useRef } from 'react'
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import { TaskFormView } from './TaskFormView';


export const TaskFormContainer = ({ editMode, setEditMode, dispatch, titleRef, descriptionRef }) => {

  const [tasks, setTasks] = useLocalStorage('tasks');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      console.log({
        id: Number(titleRef.current.id),
        title: titleRef.current.value,
        description: descriptionRef.current.value
      })
      dispatch({
        type: 'edit',
        payload: {
          id: Number(titleRef.current.id),
          title: titleRef.current.value,
          description: descriptionRef.current.value
        }
      });
      setEditMode(false);
    } else {
      const task = {
        id: Date.now(), title: titleRef.current.value,
        description: descriptionRef.current.value,
        status: false
      }

      dispatch({
        type: 'create',
        payload: task
      });

      if (tasks) {
        setTasks([task, ...tasks])
      } else {
        setTasks([task])

      }
    }
    titleRef.current.value = '';
    descriptionRef.current.value = '';


  }

  return (
    <TaskFormView
      handleSubmit={handleSubmit}
      titleRef={titleRef}
      descriptionRef={descriptionRef}
      editMode={editMode}
    />
  )
}
