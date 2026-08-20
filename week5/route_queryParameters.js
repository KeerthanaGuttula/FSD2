const express = require('express');
const app = express();
const port = 3000;
app.get('/students/:id', (req, res) => {
  const studentId = req.params.id; 
  res.send(`Student ID is: ${studentId}`);
});
app.get('/',(req,res)=>{
    res.send('<h1>Welecome to Student Management System</h1>')
});
app.get('/students/:id/subjects/:subject', (req, res) => {
  const studentId = req.params.id;
  const subject = req.params.subject;
  res.send(`Student ${studentId} is enrolled in ${subject}`);
});

app.get('/students', (req, res) => {
  const department = req.query.department; 
  const year = req.query.year;             
  res.send(`Filtering students from ${department} department, Year ${year}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
