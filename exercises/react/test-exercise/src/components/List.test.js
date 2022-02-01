import { render, screen, fireEvent } from '@testing-library/react';
import List from "./List";

const mockData = ({ id, text, createdAt }) => {
    const props = {    
        remove: jest.fn(),
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

describe("List Component", () => {
    let removeFn, todosArr;
    beforeAll(() => {
        const id = "1";
        const text = "First Todo";
        const createdAt = new Date().toLocaleDateString();
        const { remove, todos } = mockData({ id, text, createdAt })
        removeFn = remove;
        todosArr = todos;
    });

    it("should render list props", () => {
        render(<List remove={removeFn} todos={todosArr}/>);
        screen.getByTestId("1");
        screen.getByText("First Todo");
        screen.getByText(new Date().toLocaleDateString());
    });

    it("should fire remove action", () => {
        render(<List remove={removeFn} todos={todosArr}/>);
        const deleteButton = screen.getByTestId("delete-button");
        fireEvent.click(deleteButton);
        expect(removeFn).toHaveBeenCalledTimes(1);
    });
});