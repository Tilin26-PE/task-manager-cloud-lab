const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data', 'tasks.json');

function readTasks() {
    try {
        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        if (!raw.trim()) return [];
        return JSON.parse(raw);
    } catch (err) {
        return [];
    }
}

module.exports = { readTasks };