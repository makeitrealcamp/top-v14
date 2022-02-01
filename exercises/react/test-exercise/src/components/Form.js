import { useState } from "react";

const Form = ({ add }) => {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text) {
            add(text);
            setText("")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Todo"
                aria-label="todo"
                data-testid="todo-input"
            />
            <input data-testid="submit-button" type="submit" value="Submit"></input>
        </form>
    );
};

export default Form;