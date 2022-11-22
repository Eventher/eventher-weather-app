require("dotenv").config();

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

//* USERS FETCHING ====================
const usersHandler = require("./users_database/usersHandler");

// ? LOGIN USER ===============
app.get("/users", usersHandler.getAllUsers);

// ? SIGNIN USER ===============
app.post("/users", usersHandler.postUser);
//* USERS FETCHING ====================

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  }
});
