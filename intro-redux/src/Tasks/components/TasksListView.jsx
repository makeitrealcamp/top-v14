import { TaskCard } from './TaskCard';

export const TasksListView = ({ tasks, deleteTask, editTask }) => {
  return (
    <>
      {
        tasks.length > 0 ? tasks.map(({ id, title, description }) => (
          <TaskCard
            key={id}
            title={title}
            description={description}
            id={id}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />)) :
          <h2>No tasks yet, create a new task</h2>
      }
    </>
  );
};
