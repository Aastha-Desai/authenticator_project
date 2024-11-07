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
            return; // Don't add empty tasks
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
        inline: true,  // This will make the calendar visible on the page
        dateFormat: "Y-m-d",  // Format the date as Year-Month-Day
        onChange: function(selectedDates, dateStr, instance) {
            dateInput.value = dateStr; // Populate the date input with selected date
        }
    });

    // Theme change function
    function changeTheme(theme) {
        document.body.classList.remove("dark", "ocean", "forest");  // Remove all theme classes
        document.body.classList.add(theme);  // Add the selected theme
    }

    // Handle theme selection change
    themeSelector.addEventListener('change', (event) => {
        changeTheme(event.target.value);
    });

    // Initialize theme based on the selected option in the dropdown
    changeTheme(themeSelector.value);
});
