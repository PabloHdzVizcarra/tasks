const ClientPostgreSQL = require("../database/ClientPostgres");

function createItem(req, res) {
  const { state, text } = req.body;

  ClientPostgreSQL.insert({ state, text });

  res.json({ message: "example" });
}

module.exports = createItem;
