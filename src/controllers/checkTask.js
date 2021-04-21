const ClientPostgreSQL = require("../database/ClientPostgres");

async function checkTask(req, res) {
  const { state, nameTask } = req.body;

  await ClientPostgreSQL.update(state, nameTask);

  res.json({ message: true });
}

module.exports = checkTask;
