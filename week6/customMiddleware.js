const express = require("express");

const app = express();

app.use(express.json());

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

const checkUser = (req, res, next) => {
  console.log("Checking user...");
  next();
};

app.get("/", (req, res) => {
  res.json({
    message: "Home page"
  });
});

app.get("/users", checkUser, (req, res) => {
  res.json([
    { id: 1, name: "John" },
    { id: 2, name: "Alice" }
  ]);
});

app.post("/users", (req, res) => {
  console.log("Received data:", req.body);

  res.json({
    message: "User created",
    user: req.body
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});