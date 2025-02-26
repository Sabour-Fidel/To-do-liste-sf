function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Écris une tâche d’abord !");
        return;
    }

    let list = document.getElementById("taskList");
    let newTask = document.createElement("li");
    newTask.textContent = taskText;
    list.appendChild(newTask);

    input.value = ""; // Vide le champ après ajout
}
