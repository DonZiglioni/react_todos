import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import './ToDoList.css'

const TodoList = () => {
    const INITIAL_STATE = [];

    const [toDos, setToDos] = useState(INITIAL_STATE);

    const addToDo = (textInput) => {
        setToDos([...toDos, { id: toDos.length + 1, todo: textInput }]);
    }
    const removeToDo = (id) => {
        setToDos(toDos.filter(item => item.id !== id));
    }

    return (
        <>
            <h1>Quick List</h1>
            <ToDoForm addToDo={addToDo} />
            <ul className="todo-list">
                {toDos.map(item => (
                    <ToDo
                        id={item.id}
                        key={item.id}
                        todo={item.todo}
                        removeToDo={removeToDo}
                    />
                ))}
            </ul>

        </>
    )
}

export default TodoList;