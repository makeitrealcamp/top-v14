import { CreateTask, Task } from "tasks/types/TaskInterface";

export const taskValidator = (task: any): CreateTask => {
  const { title, description } = task;
  if (!task.title) throw new Error()
  if (!task.description) throw new Error()

  return {
    title, description
  }
}