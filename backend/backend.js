const express = require('express');
const path = require('path');
const taskService = require('./services/taskService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sirve el frontend (carpeta public)
app.use(express.static(path.join(__dirname, '..', 'public')));

// --- API de tareas ---

// Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
    res.json(taskService.getAllTasks());
});

// Crear una tarea
app.post('/api/tasks', (req, res) => {
    const { title } = req.body;
    if (!title || !title.trim()) {
        return res.status(400).json({ error: 'El título de la tarea es obligatorio' });
    }
    const newTask = taskService.addTask(title);
    res.status(201).json(newTask);
});

// Marcar tarea como completada / pendiente
app.put('/api/tasks/:id', (req, res) => {
    const updated = taskService.toggleTask(req.params.id);
    if (!updated) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(updated);
});

// Eliminar tarea
app.delete('/api/tasks/:id', (req, res) => {
    const deleted = taskService.deleteTask(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
