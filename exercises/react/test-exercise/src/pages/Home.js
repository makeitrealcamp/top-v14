import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Form from "../components/Form";
import List from "../components/List";

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleAdd = (text) => {
        const newTodo = {
            id: uuidv4(),
            text: text,
            createdAt: new Date().toLocaleDateString()
        };
        setTodos([...todos, newTodo]);
    };

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <>
            <Form add={handleAdd} />
            <List remove={handleDelete} todos={todos}/>
        </>
    );
};

export default Home;