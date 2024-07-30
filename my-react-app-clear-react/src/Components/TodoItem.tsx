import React, { FC } from "react";

interface ItemTodoInterFace {
  todo: { id: number; text: string };
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
