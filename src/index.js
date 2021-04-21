const { app } = require("./server");
const path = require("path");

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`App listen in port ${PORT}`);
});
