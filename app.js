const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');  // Set EJS as the templating engine

let tasks = [
  { id: 1, name: "Day Wise Plan", completed: false },
  { id: 2, name: "Pre Assessment", completed: false },
  { id: 3, name: "Webinar", completed: false },
  { id: 4, name: "Activity Report", completed: false },
  { id: 5, name: "Project Report", completed: false },
  { id: 6, name: "Test", completed: false },
  { id: 7, name: "Viva", completed: false },
];

// Serve the todo list page
app.get('/', (req, res) => {
  res.render('todo', { tasks: tasks });
});

// Route to edit a task
app.get('/edit/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    res.render('editItem', { task });
  } else {
    res.status(404).send('Task not found');
  }
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

// Route to save edited task
app.post('/edit/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.name = req.body.name;
    res.redirect('/');
  } else {
    res.status(404).send('Task not found');
  }
});

// Serve static files (CSS, etc.)
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
