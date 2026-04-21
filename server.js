const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

let tasks = [];

// API routes
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  tasks.push(req.body);
  res.send('Task added');
});

app.delete('/tasks/:id', (req, res) => {
  tasks.splice(req.params.id, 1);
  res.send('Task deleted');
});

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
