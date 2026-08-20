const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "John" },
    { id: 2, name: "Alice" }
  ]);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    id: id,
    name: "John"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});