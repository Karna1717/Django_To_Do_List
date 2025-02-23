import { useState, useEffect } from "react";
import axios from "axios";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8000/api/todo/");
    setTodos(response.data);
  };

  const addTodo = async () => {
    await axios.post("http://localhost:8000/api/todo/", newTodo);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8000/api/todo/${id}/`);
    fetchTodos();
  };

  return (
    <div className="todo">
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Title"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newTodo.description}
        onChange={(e) =>
          setNewTodo({ ...newTodo, description: e.target.value })
        }
      />
      <button onClick={addTodo}>Add Todo</button>
      </div>
        <div className="container2">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="container3">
                <div className="title">
                    <h2>{todo.title}</h2>
                </div>
                <div className="dis">
                     <p>{todo.description}</p>
                </div>
            </div>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Todo;