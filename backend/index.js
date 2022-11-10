const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.APP_PORT ?? 5000;

// Events routes
const eventsHandler = require("./eventsHandler");

app.get("/events", eventsHandler.getEvents);
app.get("/events/:id", eventsHandler.getEventsById);
app.post("/events", eventsHandler.postEvent);
app.put("/events/:id", eventsHandler.updateEvent);
app.delete("/events/:id", eventsHandler.deleteEvent);

// Suggestions routes
const suggestionsHandler = require("./suggestionsHandler");

app.get("/suggestions", suggestionsHandler.getSuggestions);
app.get("/suggestion/:id", suggestionsHandler.getSuggestionsById);
app.post("/suggestions", suggestionsHandler.postSuggestion);
app.put("/suggestions/:id", suggestionsHandler.updateSuggestion);
app.delete("/suggestions/:id", suggestionsHandler.deleteSuggestion);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  }
});

//* USERS FETCHING ====================
const usersHandler = require("./users_database/usersHandler");

// ? LOGIN USER ===============
app.get("/users", usersHandler.getAllUsers);

// ? SIGNIN USER ===============
app.post("/users", usersHandler.postUser);
//* USERS FETCHING ====================
