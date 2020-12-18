const mysql = require("mysql");
const config = require("./config.js");
const connection = mysql.createConnection(config);

const connectionFunctions = {
  connect: () => {
    connection.connect((error) => {
      if (error) throw error;
      console.log("Successfully connected to the database.");
    });
  },

  save: (todoItem, callback) => {
    connection.query(
      "INSERT INTO todo (name, priority) VALUES (?, ?)",
      [todoItem.name, todoItem.priority],
      (err) => {
        if (err) {
          throw err;
        } else callback();
      }
    );
  },

  findAll: (callback) => {
    connection.query("SELECT * FROM todo", (err, todo) => {
      if (err) {
        throw err;
      }
      callback(todo);
    });
  },

  deleteById: (id, callback) => {
    connection.query("DELETE FROM todo WHERE id=?", [id], (err, todo) => {
      if (err) {
        throw err;
      }
      return callback(todo);
    });
  },

  findById: (id, callback) => {
    connection.query("SELECT * FROM todo WHERE id=?", [id], (err, todo) => {
      if (err) {
        throw err;
      }
      return callback(todo);
    });
  },
};

module.exports = connectionFunctions;
