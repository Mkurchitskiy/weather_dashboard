
// Background Toggle Switch
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector("#light-dark-switch input[type='checkbox']");
    const modeText = document.querySelector("#mode-text");

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // For Theme Saving Preferences
            modeText.textContent = 'Dark Mode';
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); // For Theme Saving Preferences
            modeText.textContent = 'Light Mode';
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    // Checks Local Storage for theme preferences
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        document.body.classList.add(currentTheme === 'dark' ? 'dark-mode' : '');
        toggleSwitch.checked = currentTheme === 'dark';
        modeText.textContent = currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
    }
});

// Current time and date features 
function updateTimeAndDate() {
    const currentTimeAndDate = new Date();  // Get current date and time
    const formattedTime = currentTimeAndDate.toLocaleTimeString();  // Format time as a readable string
    const formattedDate = currentTimeAndDate.toLocaleDateString(); // Format date as a readable string

    document.getElementById('current-time').innerText = formattedTime; // Set the formatted time as text of the span
    document.getElementById('current-date').innerText = formattedDate; // Set the formatted date as text of the span
}

// Update the time every second
setInterval(updateTimeAndDate, 1000);

