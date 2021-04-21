const ClientPostgreSQL = require("../database/ClientPostgres");

async function checkTask(req, res) {
  const { state, nameTask } = req.body;
  if (!nameTask) {
    res.status(400).json({ error: "task name not send in request" });
    return;
  }

  await ClientPostgreSQL.update(state, nameTask);

  res.json({ message: true });
}

module.exports = checkTask;
