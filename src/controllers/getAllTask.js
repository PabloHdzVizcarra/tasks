const ClientPostgreSQL = require("../database/ClientPostgres");

async function getAllTasks(req, res) {
  const tasks_list = await ClientPostgreSQL.getAll();
  res.json({ tasks: tasks_list });
}

module.exports = getAllTasks;
