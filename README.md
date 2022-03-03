# Todo Application
<img src=screenshot.png>
# About this project
This application was done as a fullstack project for React and Node.js courses in 2020. It utilizes SQL database to store user inputs to backend. User can add and delete tasks.
The project can be accessed in Heroku from this url: https://tamk-4a00ez62-3002-group14.herokuapp.com/
# Install instructions for local use
1. Clone repository to your computer https://github.com/ailemee/todo-backend

2. In your root folder open cmd and install required modules
    ```shell
    npm install
    ```

3. Move to frontend directory and install required modules (todo-backend/todo-app)
    ```shell
    npm install
    ```

4. Modify API_URL in todo-app/src/APIRequests.js
    ```javascript
    const API_URL = "http://localhost:8080/todo"
    ```

5. Create SQL table
    ```sql
    CREATE TABLE todo (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    priority INT NOT NULL,
    PRIMARY KEY(id)
    );
    ```

    You can now insert some dummy data 
    ```sql
    INSERT INTO todo (name, priority) VALUES ("Do something", 5);
    ```

6. Edit database/config.js to match your own database
    ```javascript
    module.exports = {
      host: "your_database_url",
      user: "your_username",
      password: "your_password",
      database: "your_database",
    };
    ```

7. Move to project root and start the app
    ```shell
    node index.js
    ```
    
8. Go to http://localhost:8080 in your web browser to use your app

Testing

Example of different curl commands for testing the url (use vs code rest client syntax)

    // view todo items
    GET https://tamk-4a00ez62-3002-group14.herokuapp.com/todo HTTP/1.1
    
    ###
    
    // view todo items by id
    GET https://tamk-4a00ez62-3002-group14.herokuapp.com/todo/1 HTTP/1.1
    
    ###
    
    // add todo item
    POST https://tamk-4a00ez62-3002-group14.herokuapp.com/todo HTTP/1.1
    content-type: application/json
    
    {
        "name": "nimi",
        "priority": 1
    }
    
    ###
    
    // delete todo item
    DELETE http://localhost:8080/todo/3 HTTP/1.1
