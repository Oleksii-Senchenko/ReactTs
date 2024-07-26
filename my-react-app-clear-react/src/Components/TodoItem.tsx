import React, { FC } from "react";
import { Task } from "../App";

interface ItemTodoInterFace {
  todo: Task
  onDelete: (id: number) => void;
}

const TodoItem: FC<ItemTodoInterFace> = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
