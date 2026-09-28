const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send(`
        <h1>Registration Form</h1>

        <form action="/register" method="POST">

            <label>Name:</label>
            <input type="text" name="name">
            <br><br>

            <label>Email:</label>
            <input type="email" name="email">
            <br><br>

            <label>Age:</label>
            <input type="number" name="age">
            <br><br>

            <button type="submit">Submit</button>

        </form>
    `);
});
app.post("/register", (req, res) => {
    const { name, email, age } = req.body;
    if (!name || name.length < 3) {
        return res.send("Error: Name must contain at least 3 characters.");
    }
    if (!email || !email.includes("@")) {
        return res.send("Error: Enter a valid email.");
    }
    if (!age || isNaN(age) || age < 18) {
        return res.send("Error: Age must be 18 or above.");
    }
    res.send(`
        <h1>Registration Successful</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
    `);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});