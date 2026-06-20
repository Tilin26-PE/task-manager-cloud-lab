const { readTasks, writeTasks } = require('../utils/storage');

function getAllTasks() {
    return readTasks();
}

function addTask(title) {
    const tasks = readTasks();
    const newTask = {
        id: Date.now().toString(),
        title: title.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };
    tasks.push(newTask);
    writeTasks(tasks);
    return newTask;
}

module.exports = { getAllTasks, addTask };