import React, { useState } from "react";
import './ToDoForm.css'

const ToDoForm = ({ addToDo }) => {

    const [textInput, setTextInput] = useState("");

    const handleChange = (e) => {
        setTextInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(textInput);
        setTextInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                id='todo'
                name='todo'
                placeholder="Add new todo"
                value={textInput}
                onChange={handleChange}
            ></input>
            <button className="add-button" type='submit'>Add</button>
        </form>
    )
}

export default ToDoForm;