function addTask() {

    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Ingrese una tarea");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button onclick="this.parentElement.remove()">
            Eliminar
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}