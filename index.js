const express = require("express");
const connection = require("./database/crudrepository.js");
const app = express();
var cors = require("cors");
app.use(cors());

app.use(express.json());

// curl http://localhost:8080/todo
app.get("/todo", (req, res) => {
  connection.findAll((result) => res.send(result));
});

// curl http://localhost:8080/todo/id
app.get("/todo/:id([0-9]+)", (req, res) => {
  const id = req.params.id;
  connection.findById(id, (todoItem) => res.send(todoItem));
});

// curl -X DELETE http://localhost:8080/todo/id
app.delete("/todo/:id([0-9]+)", (req, res) => {
  const id = req.params.id;
  connection.deleteById(id, (todoItem) => res.send(todoItem));
});

app.post("/todo", (req, res) => {
  const todoItem = {
    name: req.body.name,
    priority: req.body.priority,
  };
  connection.save(todoItem, (todoItem) => res.send(todoItem));
});

// const server = app.listen(8080, () => {
//   console.log(`Listening on port ${server.address().port}`);
// });
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
