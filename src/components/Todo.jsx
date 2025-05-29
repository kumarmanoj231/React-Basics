import React, { useState } from "react";
import "../css/todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return; // Prevent empty todos
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: input, id: Math.floor(Math.random() * 10000) },
    ]);
    setInput("");
  };

  const removeTodos = (id) =>
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <h1>To do List</h1>
      <ul className="todos-list">
        {todos.map((t) => (
          <li className="todo" key={t.id}>
            <span>{t.text}</span>
            <button className="close" onClick={() => removeTodos(t.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
