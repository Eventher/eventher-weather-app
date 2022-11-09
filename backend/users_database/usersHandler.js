// /* eslint-disable camelcase */
// const database = require("./users_migrate");

// const getUser = (req, res) => {
//   const id = parseInt(req.params.id, 10);

//   database
//     .query("select * from user_info where id = ?", [id])
//     .then(([user_info]) => {
//       if (user_info[0] != null) {
//         res.status(200).json(user_info[0]);
//       } else {
//         res.status(404).send("User Not Found");
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Error retrieving data from database");
//     });
// };

// const postUser = (req, res) => {
//   const { first_name, last_name, email, city, language, entry } = req.body;
//   database
//     .query(
//       "INSERT INTO users (first_name, last_name, email, city, language, entry) VALUES (?, ?, ?, ?, ?, ?)",
//       [first_name, last_name, email, city, language, entry]
//     )
//     .then(([result]) => {
//       res.location(`/api/user_info/${result.insertId}`).sendStatus(201);
//     })
//     .catch((err) => {
//       // eslint-disable-next-line no-restricted-syntax
//       console.log(err);
//       res.status(404).send("Error inserting user");
//     });
// };

// module.exports = {
//   getUser,
//   postUser,
// };
