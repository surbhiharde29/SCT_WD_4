function addTask() {
    const input = document.getElementById("taskInput");
    const date = document.getElementById("taskDate");
    const taskText = input.value;

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleComplete(this)">
            ${taskText} 
            <small>${formatDate(date.value)}</small>
        </span>
        <div class="actions">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    date.value = "";
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}

function editTask(btn) {
    const span = btn.parentElement.previousElementSibling;
    const newTask = prompt("Edit task:", span.innerText);

    if (newTask !== null && newTask.trim() !== "") {
        span.innerHTML = `${newTask}`;
    }
}

function toggleComplete(span) {
    span.classList.toggle("completed");
}


function formatDate(date) {
    if (!date) return "";

    const d = new Date(date);

    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('default', { month: 'short' });
    const year = d.getFullYear();

    let hours = d.getHours();
    let minutes = d.getMinutes().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${day} ${month} ${year} • ${hours}:${minutes} ${ampm}`;
}
