const express = require('express');
const app = express();
app.use(express.json());

let tasks = [
  { id: 1, name: "Day Wise Plan", completed: false },
  { id: 2, name: "Pre Assessment", completed: false },
  { id: 3, name: "Webinar", completed: false },
  { id: 4, name: "Activity Report", completed: false },
  { id: 5, name: "Project Report", completed: false },
  { id: 6, name: "Test", completed: false },
  { id: 7, name: "Viva", completed: false },
];

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Update task completion status
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    task.completed = req.body.completed;
    res.json({ message: 'Task status updated successfully in TCS-ION RIO TODO List', task });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
