function deleteElement(req, res) {
  if (!req.params.task_id) {
    res.json({ error: "not sent id to delete task" });
    return;
  }

  res.json({ message: "OK" });
}

module.exports = deleteElement;
