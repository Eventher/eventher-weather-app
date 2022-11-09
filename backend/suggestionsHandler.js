const database = require("./migrate");

const getSuggestions = (req, res) => {
  database
    .query("select * from suggestions")
    .then(([suggestions]) => {
      res.status(200).json(suggestions);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getSuggestionsById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("select * from suggestions where id = ?", [id])
    .then(([suggestions]) => {
      if (suggestions[0] != null) {
        res.status(200).json(suggestions[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postSuggestion = (req, res) => {
  const { name, email, activity, description } = req.body;

  database
    .query(
      "INSERT INTO suggestions (name, email, activity, description) VALUES (?, ?, ?, ?)",
      [name, email, activity, description]
    )
    .then(([result]) => {
      res.location(`/suggestions/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the suggestion");
    });
};

const updateSuggestion = (req, res) => {
  const { name, email, activity, description } = req.body;
  const id = parseInt(req.params.id, 10);

  database
    .query(
      "UPDATE suggestions SET name=?, email=?, activity=?, description=? WHERE id=?",
      [name, email, activity, description, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not found");
      } else {
        res.status(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the suggestion");
    });
};

const deleteSuggestion = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM suggestions WHERE id=?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not found");
      } else {
        res.status(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the suggestion");
    });
};

module.exports = {
  getSuggestions,
  getSuggestionsById,
  postSuggestion,
  updateSuggestion,
  deleteSuggestion,
};
