import React from "react";

import TodoListItem from "./todo-lidt-item";

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Learn React"/></li>
            <li><TodoListItem label="Drink coffee"/></li>
            <li><TodoListItem label="Build Awesome App"/></li>
        </ul>
    );
}

export default TodoList;