const ClientPostgreSQL = require("../database/ClientPostgres");

async function deleteElement(req, res) {
  const task_name = req.params.task_id;
  if (!task_name) {
    res.json({ error: "not sent id to delete task" });
    return;
  }

  await ClientPostgreSQL.delete(task_name);
  res.json({ message: "OK" });
}

module.exports = deleteElement;
