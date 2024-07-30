import TodoItem from "./Components/TodoItem";
import AddTodoForm from "./Components/AddTodoForm";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/todoSlice";
import { RootState } from "./redux/store";



function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={(text) => dispatch(addTodo(text))} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={(id)=> dispatch(deleteTodo(id))} />
        ))}
      </ul>
    </div>
  );
}

export default App;
