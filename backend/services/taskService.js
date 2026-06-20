const { readTasks, writeTasks } = require('../utils/storage');

function getAllTasks() {
    return readTasks();
}

module.exports = { getAllTasks };