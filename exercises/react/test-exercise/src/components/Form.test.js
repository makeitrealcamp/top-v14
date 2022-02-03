import { render, screen, fireEvent } from '@testing-library/react';
import Form from "./Form";

const mockData = ({ text }) => {
    const props = {    
        add: jest.fn(),
        todo: text,
    }

  return props
}

describe("Create element", () => {
    let addFn, todoElement;
    beforeAll(() => {
        const text = "First Todo";
        const { add, todo } = mockData({  text })
        addFn = add;
        todoElement = todo;
    });

    it("should render input form", () => {
        render(<Form add={addFn}/>);
        screen.getByText("Submit");
        const inputspace = screen.getByTestId("todo-input");
        screen.queryByPlaceholderText('Todo');
        expect(inputspace.value).toBe('');
    });

    it("should change input", () => {
        render(<Form add={addFn}/>);
        const inputSpace = screen.getByTestId("todo-input");
        fireEvent.change(inputSpace, {target: {value: todoElement}})
        expect(inputSpace.value).toBe(todoElement)
    });


    it("should fire add action", () => {
        render(<Form add={addFn}/>);
        const submitButton = screen.getByTestId("submit-button");
        const inputSpace = screen.getByTestId("todo-input");
        fireEvent.change(inputSpace, {target: {value: todoElement}});
        fireEvent.click(submitButton);
        expect(addFn).toHaveBeenCalledTimes(1);
    });

    it("should remove input value after task", () => {
        render(<Form add={addFn}/>);
        const submitButton = screen.getByTestId("submit-button");
        const inputSpace = screen.getByTestId("todo-input");
        fireEvent.change(inputSpace, {target: {value: todoElement}});
        fireEvent.click(submitButton);
        expect(inputSpace.value).toBe('');
    });
});

