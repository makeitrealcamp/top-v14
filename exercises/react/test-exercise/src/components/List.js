import styled from 'styled-components';
import { MdDeleteOutline } from "react-icons/md";
import Paragraph from "./shared/Paragraph";

const StyledList = styled.ul`
    list-style-type: none;
    width: 400px;
    padding: 0;
`

const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 10px;
    justify-content: space-between;
    transition: background-color 0.5s;
    &:hover {
        background-color: bisque;
    }
`

const TodoInfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 10px;
`

const TodoActions = styled.div`
    display: flex;
    margin-left: 10px;
`

const DeleteIcon = styled(MdDeleteOutline)`
    &:hover {
        color: red;
    }
`

const List = ({ remove, todos }) => {
    console.log(todos)
    return (
        <StyledList>
            {todos.map(todo => (
                <StyledListItem key={todo.id} data-testid={todo.id}>
                    <TodoInfo>
                        <Paragraph>
                            {todo.text}
                        </Paragraph>
                        <Paragraph type="caption">
                            {todo.createdAt}
                        </Paragraph>
                    </TodoInfo>
                    <TodoActions>
                        <DeleteIcon data-testid="delete-button" onClick={() => remove(todo.id)}/>
                    </TodoActions>
                </StyledListItem>
            ))}
        </StyledList>
    );
}

export default List;
