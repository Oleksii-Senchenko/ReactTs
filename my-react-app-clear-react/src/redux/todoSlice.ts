import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
}

const initialState: Task[] = [];

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>): void => {
      state.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {addTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer

// const deleteTodo = (id: number) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
// //   };
