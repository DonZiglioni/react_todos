import React from "react";
import "./ToDo.css"

const ToDo = ({ id, todo, removeToDo }) => {
    return (
        <li id={id}>
            <span> {todo} </span>
            <button className="remove-btn" onClick={() => removeToDo(id)}>x</button>
        </li>
    )
}

export default ToDo;