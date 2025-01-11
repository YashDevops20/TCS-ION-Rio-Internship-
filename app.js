// app.js
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Sample to-do list with day-wise tasks
let todolist = [
    { title: "Task Title 1", subtasks: ["Pre-assessment", "Webinar", "Activity Report", "Project Report", "Project Test", "Viva"] },
    { title: "Task Title 2", subtasks: ["Pre-assessment", "Webinar", "Activity Report", "Project Report", "Project Test", "Viva"] },
    { title: "Task Title 3", subtasks: ["Pre-assessment", "Webinar", "Activity Report", "Project Report", "Project Test", "Viva"] }
];

// Serve the To-Do list page
app.get('/todo', (req, res) => {
    res.render('todo', { title: 'TCS ION RIO INTERNSHIPS PROJECT TODO LIST', todolist: todolist });
});

// Add a new task
app.post('/todo/add/', (req, res) => {
    const newTask = req.body.newtodo;
    if (newTask) {
        todolist.push({ title: newTask, subtasks: ["Pre-assessment", "Webinar", "Activity Report", "Project Report", "Project Test", "Viva"] });
    }
    res.redirect('/todo');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
