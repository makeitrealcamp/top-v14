import React, { useRef } from 'react'
import { TaskFormView } from './TaskFormView';


export const TaskFormContainer = ({ editMode, setEditMode, dispatch, titleRef, descriptionRef }) => {




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
      dispatch({
        type: 'create',
        payload: {
          id: Date.now(), title: titleRef.current.value,
          description: descriptionRef.current.value,
          status: false
        }
      });
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
