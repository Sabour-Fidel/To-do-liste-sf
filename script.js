function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Écris une tâche d’abord, malin !");
        return;
    }

    let list = document.getElementById("taskList");
    let newTask = document.createElement("li");

    // Checkbox pour cocher la tâche
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        newTask.classList.toggle("completed");
    };

    // Texte de la tâche
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Bouton supprimer
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.onclick = function() {
        list.removeChild(newTask);
    };

    // Ajout des éléments à la tâche
    newTask.appendChild(checkbox);
    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteButton);
    list.appendChild(newTask);

    input.value = ""; // Vide le champ
}

// Bonus : Ajouter une tâche avec la touche Entrée
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
