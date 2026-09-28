const express = require("express");
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index", {
        title: "User Registration",
        message: null
    });
});
app.post("/register", (req, res) => {
    const { username, age } = req.body;
    let message;
    if (!username || username.length < 3) {
        message = "Username must be at least 3 characters long.";
    }
    else if (!age || isNaN(age) || age < 18) {
        message = "You must be at least 18 years old.";
    }
    else {
        message = `Registration successful! Welcome ${username}`;
    }
    res.render("index", {
        title: "Registration Result",
        message: message
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});