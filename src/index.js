const { app } = require("./server");
const path = require("path");
const controllerTodo = require("./routes/todoRouter");
const { Client } = require("pg");

console.log(process.env.DB_URL);

const client = new Client({
  user: "postgres",
  host: process.env.DB_URL,
  database: "tasks",
  password: "secret",
  port: "5432",
});

client.connect().then((connection) => {
  console.log("Connected to Postgres");
});

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.use("/todo", controllerTodo);

app.listen(PORT, () => {
  console.log(`App listen in port ${PORT}`);
});
