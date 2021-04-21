const ClientPostgreSQL = require("../database/ClientPostgres");

function createItem(req, res) {
  const { state, text } = req.body;
  if (!text) {
    res.status(400).json({ error: "you must pass all the correct data" });
    return;
  }

  ClientPostgreSQL.insert({ state, text });

  res.json({ message: `insert task ${text} successfully` });
}

module.exports = createItem;
