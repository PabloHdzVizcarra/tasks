const ClientPostgreSQL = require("../database/ClientPostgres");

function createItem(req, res) {
  const { state, text } = req.body;
  if (!state || !text) {
    res.status(400).json({ error: "you must pass all the correct data" });
  }

  ClientPostgreSQL.insert({ state, text });

  res.json({ message: "insert data is successfully" });
}

module.exports = createItem;
