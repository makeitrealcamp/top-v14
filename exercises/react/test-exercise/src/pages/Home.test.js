import { render, screen, fireEvent } from '@testing-library/react';
import Home from "./Home";

const mockData = ({ id,text,createdAt }) => {
    const props = {    
        addfn: jest.fn(),
        deletefn: jest.fn(),
        todo: text,
        todos: [
            {
                id,
                text,
                createdAt
            }
        ]
    }

  return props
}

describe("Create element", () => {
    let addFn, deleteFn, todoElement, todoList;
    beforeAll(() => {
        const id = "1";
        const text = "First Todo";
        const createdAt = new Date().toLocaleDateString();
        const { addfn, deletefn, todo, todos } = mockData({ id, text, createdAt })
        addFn = addfn;
        deleteFn = deletefn;
        todoElement = todo;
        todoList = todos;
    });

    it("should render input form", () => {
        render(<Home/>);
        screen.getByText("Submit");
        screen.getByTestId("todo-input");
        screen.queryByPlaceholderText('Todo');
    });

    it("should change input", () => {
        render(<Home/>);
        const inputSpace = screen.getByTestId("todo-input");
        fireEvent.change(inputSpace, {target: {value: todoElement}})
        expect(inputSpace.value).toBe(todoElement)
    });

    it("should empty  input after submit", () => {
        render(<Home/>);
        const submitButton = screen.getByTestId("submit-button");
        const inputSpace = screen.getByTestId("todo-input");
        fireEvent.change(inputSpace, {target: {value: todoElement}});
        fireEvent.click(submitButton);
        expect(inputSpace.value).toBe('');
    });

    it("should fire add action", () => {
        render(<Home/>);
        const submitButton = screen.getByTestId("submit-button");
        const inputSpace = screen.getByTestId("todo-input");
        fireEvent.change(inputSpace, {target: {value: todoElement}});
        fireEvent.click(submitButton);
        screen.getByText(todoElement);
        screen.getByText(new Date().toLocaleDateString());
        screen.getByTestId("delete-button");
    });


    it("should remove element", () => {
        render(<Home/>);
        const submitButton = screen.getByTestId("submit-button");
        const inputSpace = screen.getByTestId("todo-input");
        fireEvent.change(inputSpace, {target: {value: todoElement}});
        fireEvent.click(submitButton);
        const deleteButton = screen.getByTestId("delete-button");
        fireEvent.click(deleteButton);
        expect(screen.queryByText(todoElement)).toBeNull() ;
        expect(screen.queryByText(new Date().toLocaleDateString())).toBeNull() ;
    });

});