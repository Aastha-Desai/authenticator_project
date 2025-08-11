document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.querySelector('.add-btn');
    const taskInput = document.querySelector('.task-input');
    const reminderInput = document.querySelector('.reminder-input');
    const dateInput = document.querySelector('.date-input');
    const taskList = document.querySelector('.task-list');
    const themeSelector = document.querySelector('#theme');
    const calendarElement = document.querySelector('#calendar');

    // Function to add a task to the list
    addBtn.addEventListener('click', () => {
        if (taskInput.value.trim() === '') {
            return; 
        }

        // Create a new task item
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span>${taskInput.value}</span>
            <div class="reminder-details">
                <span>${reminderInput.value}</span>
                <span>${dateInput.value}</span>
            </div>
        `;

        // Append the new task to the list
        taskList.appendChild(listItem);

        // Clear the inputs
        taskInput.value = '';
        reminderInput.value = '';
        dateInput.value = '';
    });

    // Initialize Flatpickr calendar
    flatpickr(calendarElement, {
        inline: true,  
        dateFormat: "Y-m-d",  
        onChange: function(selectedDates, dateStr, instance) {
            dateInput.value = dateStr; 
        }
    });

   
    function changeTheme(theme) {
        document.body.classList.remove("dark", "ocean", "forest");  
        document.body.classList.add(theme); 
    }

    // Handle theme selection change
    themeSelector.addEventListener('change', (event) => {
        changeTheme(event.target.value);
    });

    // Initialize theme based on the selected option in the dropdown
    changeTheme(themeSelector.value);
});
