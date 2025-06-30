const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Agregar tarea al presionar Enter
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

// Función para agregar una tarea
function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  // Marcar tarea como completada al hacer click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Botón para eliminar tarea
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Evitar que se marque como completada al eliminar
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
