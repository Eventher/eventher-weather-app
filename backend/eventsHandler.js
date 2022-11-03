const database = require("./migrate");

const getEvents = (req, res) => {
  database
    .query("select * from events")
    .then(([events]) => {
      res.status(200).json(events);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getEventsById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("select * from events where id = ?", [id])
    .then(([events]) => {
      if (events[0] != null) {
        res.status(200).json(events[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getEvents,
  getEventsById,
};
