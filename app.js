// Simple To-Do List Application for TCS-ION RIO Internship

const readline = require('readline');

const tasks = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(`
  ===============================
   TCS-ION RIO Internship To-Do List
  ===============================
  1. View Tasks
  2. Add Task
  3. Delete Task
  4. Exit
  ===============================
  `);
  rl.question('Choose an option (1-4): ', handleUserInput);
}

function viewTasks() {
  if (tasks.length === 0) {
    console.log('No tasks available.');
  } else {
    console.log('\nYour Tasks:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  showMenu();
}

function addTask() {
  rl.question('Enter the new task: ', (task) => {
    if (task.trim()) {
      tasks.push(task);
      console.log(`Task added: "${task}"`);
    } else {
      console.log('Task cannot be empty!');
    }
    showMenu();
  });
}

function deleteTask() {
  if (tasks.length === 0) {
    console.log('No tasks to delete.');
    showMenu();
    return;
  }
  rl.question('Enter the task number to delete: ', (number) => {
    const taskIndex = parseInt(number) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      console.log(`Task removed: "${tasks[taskIndex]}"`);
      tasks.splice(taskIndex, 1);
    } else {
      console.log('Invalid task number.');
    }
    showMenu();
  });
}

function handleUserInput(option) {
  switch (option.trim()) {
    case '1':
      viewTasks();
      break;
    case '2':
      addTask();
      break;
    case '3':
      deleteTask();
      break;
    case '4':
      console.log('Exiting To-Do List. Have a productive day!');
      rl.close();
      break;
    default:
      console.log('Invalid option. Please choose 1-4.');
      showMenu();
  }
}

// Start the application
showMenu();
