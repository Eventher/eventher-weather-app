/* eslint-disable camelcase */
const database = require("../migrate");

const getAllUsers = (req, res) => {
  // const id = parseInt(req.params.id, 10);

  database
    .query(`select * from users`)
    .then((users) => {
      res.status(200).send(users[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postUser = (req, res) => {
  const { first_name, last_name, email, city, language, entry } = req.body;
  database
    .query(
      "INSERT INTO users (first_name, last_name, email, city, language, entry) VALUES (?, ?, ?, ?, ?, ?)",
      [first_name, last_name, email, city, language, entry]
    )
    .then(([result]) => {
      res.location(`/api/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      // eslint-disable-next-line no-restricted-syntax
      console.log(err);
      res.status(404).send("Error inserting user");
    });
};

module.exports = {
  getAllUsers,
  postUser,
};
