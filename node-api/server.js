const express = require("express");
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send({ message: "API running through Traefik!" });
});

app.get("/api/status", (req, res) => {
  res.send({ status: "ok", time: new Date() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
