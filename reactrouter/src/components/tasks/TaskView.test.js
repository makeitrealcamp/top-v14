/*
  task,
  handleDelete,
  handleEdit,
  handleStatus,
  editMode
}) => {
  const { title, id, status, description } = task;

  */

import { screen, render, fireEvent } from "@testing-library/react";
import { TaskView } from "./TaskView";

const mockData = {
  task: {
    id: 0,
    status: false,
    title: 'test title',
    description: 'demo desc'
  },
  handleStatus: jest.fn()

}

describe('TaskView Component', () => {

  it('should render the task ', () => {
    const view = render(<TaskView task={mockData.task} />)
    console.log(view.debug());
    screen.getByText('test title')
    screen.getByText('demo desc')
  });

  it('should call change tasks status funcion', () => {
    render(<TaskView task={mockData.task} handleStatus={mockData.handleStatus} />)
    const button = screen.getByTestId('status-undone')
    fireEvent.click(button)
    expect(mockData.handleStatus).toHaveBeenCalledTimes(1)
  });

})