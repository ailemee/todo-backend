import axios from "axios";

const API_URL = "https://tamk-4a00ez62-3002-group14.herokuapp.com/todo/";

async function getAllTodos() {
  const { data: todo } = await axios.get(API_URL);
  return todo;
}

async function addTodo(name, priority) {
  const { data: newTodo } = await axios.post(API_URL, {
    name,
    priority,
  });
  return newTodo;
}

async function deleteTodo(id) {
  const message = await axios.delete(`${API_URL}${id}`);
  return message;
}

export default { getAllTodos, addTodo, deleteTodo };
