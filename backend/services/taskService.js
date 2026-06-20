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

function toggleTask(id) {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === id);
    if (!task) return null;
    task.completed = !task.completed;
    writeTasks(tasks);
    return task;
}

function deleteTask(id) {
    const tasks = readTasks();
    const filtered = tasks.filter(t => t.id !== id);
    const deleted = filtered.length !== tasks.length;
    writeTasks(filtered);
    return deleted;
}

module.exports = { getAllTasks, addTask, toggleTask, deleteTask };