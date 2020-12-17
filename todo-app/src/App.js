import "./App.css";
import React, { useState, useEffect } from "react";
import APIRequests from "./APIRequests.js";

function Todo({ todo, deleteTodo }) {
  return (
    <div className="todo">
      {todo.name}
      <div>
        <button onClick={() => deleteTodo(todo.id)}>Remove</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodoAndSetTodos = async () => {
      const todos = await APIRequests.getAllTodos();
      setTodos(todos);
    };
    fetchTodoAndSetTodos();
  }, []);

  const addTodo = async (id, priority) => {
    const newTodos = await APIRequests.addTodo(id, (priority = 1));
    setTodos([...todos, newTodos]);
  };

  const deleteTodo = async (id) => {
    try {
      await APIRequests.deleteTodo(id);
      setTodos(todos.filter(({ id: i }) => id !== i));
    } catch (err) {}
  };

  console.log(todos);
  console.log(Array.isArray(todos));
  let aaaaa = [];
  const l = todos.length;
  for (let i = 0; i < l; i++) {
    const todo = todos[i];
    aaaaa.push(
      <Todo
        key={todo.id}
        name={todo.name}
        todo={todo}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
      />
    );
  }

  // let aaaaa = todos.map((todo, id) => (
  //   <Todo
  //     key={id}
  //     id={id}
  //     todo={todo}
  //     addTodo={addTodo}
  //     deleteTodo={deleteTodo}
  //   />
  // ));

  return (
    <div className="app">
      <div className="todo-list">
        {
          aaaaa
          /* {todos.map((todo) => (
          <Todo
            key={todos.id}
            name={todos.name}
            todo={todo}
            addTodo={addTodo}
            deleteTodo={deleteTodo}
          />
        ))} */
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;
