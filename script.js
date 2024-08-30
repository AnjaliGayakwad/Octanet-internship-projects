document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    addTaskButton.addEventListener('click', () => {
        addTask();
    });

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            listItem.style.opacity = 0;  // Start animation

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            listItem.appendChild(deleteButton);

            taskList.appendChild(listItem);
            taskInput.value = '';

            // Animate task appearance
            setTimeout(() => {
                listItem.style.opacity = 1;  // End animation
            }, 0);

            // Mark task as completed on click
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            // Delete task on button click
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                listItem.style.opacity = 0;  // Start fade-out animation
                setTimeout(() => {
                    taskList.removeChild(listItem);  // Remove after animation
                }, 300);
            });
        }
    }
});
