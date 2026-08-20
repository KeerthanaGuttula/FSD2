const express = require("express");

const app = express();


app.use(express.json());


app.post("/users", (req, res) => {
  const user = req.body;

  console.log(user);

  res.json({
    message: "User created",
    user: user
  });
});


app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;

  console.log(id);
  console.log(updatedUser);

  res.json({
    message: "User updated",
    id: id,
    user: updatedUser
  });
});


app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    message: "User deleted",
    id: id
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});