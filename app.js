const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Serve static files like CSS
app.use(express.static('public'));

// Body parser middleware to handle form submissions
app.use(bodyParser.urlencoded({ extended: false }));

// Array to store the tasks
let tasks = [
    'Pre-Assessment',
    'Webinar Activity',
    'Activity Report',
    'Project Report',
    'Project Test',
    'Viva'
];

// Home route - displaying the to-do list
app.get('/', (req, res) => {
    res.render('index', { todolist: tasks });
});

// Add a new task route
app.post('/todo/add/', (req, res) => {
    const newTask = req.body.newtodo;
    if (newTask && newTask.trim()) {
        tasks.push(newTask);
    }
    res.redirect('/');
});

// Route to delete a task by index (optional)
app.get('/todo/delete/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    }
    res.redirect('/');
});

// Route to edit a task by index (optional)
app.get('/todo/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < tasks.length) {
        res.render('edititem', { task: tasks[index], index: index });
    } else {
        res.redirect('/');
    }
});

// Post route to save edited task
app.post('/todo/edit/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < tasks.length) {
        tasks[index] = req.body.editedTask;
    }
    res.redirect('/');
});

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
