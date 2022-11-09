const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.APP_PORT ?? 5000;

const eventsHandler = require("./eventsHandler");

app.get("/events", eventsHandler.getEvents);
app.get("/events/:id", eventsHandler.getEventsById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  }
});

//* USERS FETCHING ====================
// const usersHandler = require("./users_database/usersHandler");

// ? LOGIN USER ===============
// app.get("/users/:id", usersHandler.getUser);

// ? SIGNIN USER ===============
// app.post("/users", usersHandler.postUser);
//* USERS FETCHING ====================
